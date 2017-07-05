import axios from "axios";
import React from "react";

import {Link} from "react-router-dom";
import {translate} from "react-i18next";
import { toast } from 'react-toastify';

import EmptyList from "./empty_list";
import Loading from "./loading";
import User from "./../util/User";

class DrugList extends React.Component {
    constructor(props) {
        super();

        this.state = {
        		drugs		: [],
        		interactions	: '',
        		cmd			: '',
        		loading		: false
        }
        
        this.checkForInteractions	= this.checkForInteractions.bind(this);
        this.addToRememberList		= this.addToRememberList.bind(this);
        this.removeFromRememberList	= this.removeFromRememberList.bind(this);
        this.addToTakingList			= this.addToTakingList.bind(this);
        this.removeFromTakingList	= this.removeFromTakingList.bind(this);
    }

    setCmd() {
        
		var path= this.props.location.pathname.split('/');
		var cmd	= path[path.length-1];
        
		this.state.cmd = cmd;
		this.state.interactions = '';
		this.state.loading	= true;
		this.setState(this.state);
		
		switch(this.state.cmd) {
			case 'taking':
		        axios.get('/drug/list/taking')
	            .then(({data}) => {
	            		this.state.drugs = data.value;
	            		this.state.loading	= false;
	            		this.setState(this.state);
			        this.checkForInteractions();
	            });
				break;
			case 'remember':
		        axios.get('/drug/list/remember')
	            .then(({data}) => {
		        		this.state.drugs = data.value;
	            		this.state.loading	= false;
		        		this.setState(this.state);
		            this.checkForInteractions();
	            });
				break;
			default:
		        axios.get('/drug/list/all')
	            .then(({data}) => {
		        		this.state.drugs = data.value;
	            		this.state.loading	= false;
		        		this.setState(this.state);
	            });
				break;		
		}
    }
    
    
    // This function is called before render() to initialize its state.
    componentWillMount() {
    		this.setCmd();
    }
    
    componentWillReceiveProps(props){
    		this.props = props;
        this.setCmd();
     }
    

	createMarkup(text) { return {__html: text}; };
    
    //=============================
    
    
    toggleTaking(drug) {
    		if(drug.isTaken) {
    			this.removeFromTakingList(drug);
    		} else {
    			this.addToTakingList(drug);
    		}
    }
	
    addToTakingList(drug) {
    	 	axios.post('/drug/taking/add', { id : drug.id }, {
	            validateStatus: (status) => {
	                return (status >= 200 && status < 300) || status == 400 || status == 401
	            }
     		})
         .then(({data, status}) => {
             const {t} = this.props;
             const options = {
             	    position: toast.POSITION.BOTTOM_CENTER
             };
             
             switch (status) {
                 case 200:
                     toast.success(t('addToTakingListSuccess'), options);
                     break;
                 case 400:
                  	toast.error(t('addToTakingListFailed'), options);
                     break;
                 case 401:
                 	console.log(data, "not permitted");
                    	break;
             }
         });
    }
    
    removeFromTakingList(drug) {
	 	axios.post('/drug/taking/remove', { id : drug.id }, {
            validateStatus: (status) => {
                return (status >= 200 && status < 300) || status == 400 || status == 401
            }
 		})
	     .then(({data, status}) => {
             const {t} = this.props;
             const options = {
             	    position: toast.POSITION.BOTTOM_CENTER
             };
             
	         switch (status) {
	             case 200:
                     toast.success(t('removeFromTakingListSuccess'), options);
                     var idx = this.state.drugs.indexOf(drug);
                     this.state.drugs.slice(idx, 1);
                     this.setState(this.state);
	                 this.checkForInteractions();
	                 break;
	             case 400:
                     toast.error(t('removeFromTakingListFailed'), options);
	                 break;
	             case 401:
	             	console.log(data, "not permitted");
	                	break;
	         }
	     });
	}
    
    
    
    toggleRemember(drug) {
    		if(drug.isRemembered) {
    			this.removeFromRememberList(drug);
    		} else {
    			this.addToRememberList(drug);
    		}
    }
    
    addToRememberList(drug) {
	 	axios.post('/drug/remember/add', { id : drug.id }, {
            validateStatus: (status) => {
                return (status >= 200 && status < 300) || status == 400 || status == 401 || status == 405
            }
 		})
	     .then(({data, status}) => {
             const {t} = this.props;
             const options = {
             	    position: toast.POSITION.BOTTOM_CENTER
             };
             
	         switch (status) {
	             case 200:
	                 toast.success(t('addToRememberListSuccess'), options);
	                 break;
	             case 400:
	            	 	toast.error(t('addToRememberListFailed'), options);
	            	 	break;
	             case 401:
	             	console.log(data, "not permitted");
	                	break;
	             case 405:
		            console.log(data, "Method not allowed");
		            break;
	         }
	     });
    }
    
    removeFromRememberList(drug) {
	 	axios.post('/drug/remember/remove', { id : drug.id }, {
            validateStatus: (status) => {
                return (status >= 200 && status < 300) || status == 400 || status == 401 || status == 405
            }
 		})
	     .then(({data, status}) => {

             const {t} = this.props;
             const options = {
             	    position: toast.POSITION.BOTTOM_CENTER
             };

	         switch (status) {
	             case 200:
	                 toast.success(t('removeFromRememberListSuccess'), options);
                     var idx = this.state.drugs.indexOf(drug);
                     this.state.drugs.slice(idx, 1);
                     this.setState(this.state);
	                 this.checkForInteractions();
	                 break;
	             case 400:
	            	 	toast.error(t('removeFromRememberListFailed'), options);
	            	 	break;
	             case 401:
	             	console.log(data, "not permitted");
	                	break;
	             case 405:
		            console.log(data, "Method not allowed");
		            break;
	         }
	     });
    }
    
    
    deleteDrug(id) {
        // ES6 string interpolation (https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings)
        // No error handling for now, e.g. if the user is not authenticated.
        axios.delete(`/drugs/delete/${id}`)
            .then((data) => {
                // Remove post from list of posts.
                const posts = this.state.posts.filter(e => e.id != id);
                this.setState({
                    drugs: drugs
                })
            });
    }

    
    checkForInteractions() {
        axios.get('/drug/interactions').then(({data}) => {
	    		this.state.interactions = data.value;
	    		this.setState(this.state);
        });
    }
    
    //=============================
    
    renderDrugFeatures(drug) {
		if(!drug.drugFeature) {
			return;
		}
	
        return (
        		<p className="drug-features">
        			{ drug.drugFeature.map(feature => <img key={feature.id} src={"./../../assets/icons/"+feature.id + ".svg"} className="drug-feature-icon" alt={feature.drugFeature} title={feature.drugFeature}></img> ) }
        		</p>
		);
    }

	renderDisease(drug) {
		if(!drug.disease) {
			return;
		}

        const {t} = this.props;
        
        return (
        		<p> {t('usedWhen')}: 
        			{ drug.disease.map(packaging => <span key={disease.id}>{disease.name}</span> ) }
	        </p>
		);
	}
	
	renderActiveSubstance(drug) {
		if(!drug.activeSubstance) {
			return;
		}

        const {t} = this.props;
        
        return (
        		<p> {t('activeSubstance')}: 
        			{ drug.activeSubstance.map(substance => <span key={substance.id}>{substance.name}</span> ) }
	        </p>
		);
	}
    
    
    renderDrugs(drugs) {
        return drugs.map((drug => {
            return (
               <li className="col-sm-12 col-md-12 col-lg-12" key={drug.id}>
               		<Link to={`/drug/${drug.id}`}>
		               	<div className="image-container col-sm-2 col-md-2 col-lg-2">
		        			<img className="featurette-image img-responsive center-block" alt="{drug.name}" src="http://www.benefit-online.de/fileadmin/content/magazin/gesundheit/Medikamente2.jpg"></img>
		        		</div>
	        		</Link>
        		<div className="info col-sm-9 col-md-9 col-lg-9">
        			<Link to={`/drug/${drug.id}`}>
        				<h4>{ drug.name }</h4>
        			</Link>
        			
        			{this.renderDrugFeatures(drug)}
        			
        			{this.renderDisease(drug)}
        			
        			{this.renderActiveSubstance(drug)}

        			{drug.year && <p>new Date(drug.year).toISOString()</p>}
        		</div>
        		<div className="action-pattern col-sm-1 col-md-1 col-lg-1">
	        		{User.isAuthenticated() &&
	        			<ul>
	        				<li>
	        					<button type="button" className="btn btn-xs btn-like" onClick={() => this.toggleTaking(drug)}>
	        						<span className={"glyphicon white "+(drug.isTaken ? 'glyphicon-minus' : 'glyphicon-heart' )}></span>
	        					</button>
	        				</li>
	        				<li>
	        					<button type="button" className="btn btn-xs btn-add" onClick={() => this.toggleRemember(drug)}>
	        						<span className={"glyphicon white "+ (drug.isRemembered ? 'glyphicon-minus' : 'glyphicon-plus' )}></span>
	        					</button>
	        				</li>
	        				<li>
		        				<button type="button" className="btn btn-xs btn-open">
			        				<Link to={`/drug/${drug.id}`}>
		        						<span className="glyphicon glyphicon-eye-open white"></span>
				        			</Link>
		        				</button>
	        				</li>
	        			</ul>
	        		}
        		</div>
        	</li>
            );
        }));
    }


    render() {
        const {t} = this.props;
        const firstname = User.firstname;
        const lastname = User.lastname;

        const drugs			= this.state.drugs;
        const interactions	= this.state.interactions;


        var title = null;
        var description = null;
        
	    switch(this.state.cmd) {
	    		case 'taking':
	    			title = t('userDrugs');
	        		description = t('drugTakingListDescriptionText');
	        		break;
		    case 'remember':
		    		title = t('rememberedDrugs');
		    		description = t('drugRememberListDescriptionText');
		    	default:
		    		title = t('drugs');
		    		description = t('drugListAllDescriptionText');
		    		break;
	    }
        
        return (
	        	<div className="container no-banner">
		    		<div className='page-header'>
		    			<h3>{title}</h3>
				</div>
				{User.isAuthenticated() && User.levelOfDetail >= 3 &&
		            <div className="text-box">
						{description.replace("%User.firstname%", firstname).replace("%User.lastname%", lastname)}
		            </div>
				}
					
					{drugs.length > 1 && User.isAuthenticated() && interactions.length > 0 &&
						<div className="alert alert-danger">
							<h5>{t("interaction")}</h5>
							<span dangerouslySetInnerHTML={this.createMarkup(interactions)} />
		                </div>
					}
    
	                <div className="row">
            				{this.state.loading && <Loading /> }
            				{!this.state.loading && drugs && drugs.length == 0 && <EmptyList /> }
	                		{!this.state.loading && drugs && drugs.length > 0 &&
			                <ul className="drug-list">
			                    {this.renderDrugs(drugs)}
			                </ul>
	                		}
	                </div>
	            </div>
        );
    }
}


export default translate()(DrugList);