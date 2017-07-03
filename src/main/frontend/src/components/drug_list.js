import axios from "axios";
import React from "react";

import {Link} from "react-router-dom";
import {translate} from "react-i18next";
import { toast } from 'react-toastify';

import User from "./../util/User";

class DrugList extends React.Component {
    constructor(props) {
        super();

        this.state = {
        		drugs	: [],
        		cmd		: ''
        }
    }

    setCmd() {
        
		var path= this.props.location.pathname.split('/');
		var cmd	= path[path.length-1];
        
		this.state.cmd = cmd;
		this.setState(this.state);
		
		switch(this.state.cmd) {
		case 'taking':
	        axios.get('/drug/list/taking')
            .then(({data}) => {
                this.setState({
                    drugs: data.value
                });
            });
			break;
		case 'remember':
	        axios.get('/drug/list/remember')
            .then(({data}) => {
                this.setState({
                    drugs: data.value
                });
            });
			break;
		default:
	        axios.get('/drug/list/all')
            .then(({data}) => {
                this.setState({
                    drugs: data.value
                });
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
    
    //=============================
    
    addToTakingList(id) {
    	 	axios.post('/drug/taking/add', { id : id }, {
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
    
    removeFromTakingList(id) {
	 	axios.post('/drug/taking/remove', { id : id }, {
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
    
    addToRememberList(id) {
	 	axios.post('/drug/remember/add', { id : id }, {
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
    
    removeFromRememberList(id) {
	 	axios.post('/drug/remember/remove', { id : id }, {
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
		
        return (
        	<p> U. a. verwendet bei: 
	        	{ drug.disease.map(packaging => <span key={disease.id}>{disease.name}</span> ) }
	        </p>
		);
	}
	
	renderActiveSubstance(drug) {
		if(!drug.activeSubstance) {
			return;
		}
		
        return (
        	<p> Wirkstoff(e): 
	        	{ drug.activeSubstance.map(substance => <span key={substance.id}>{substance.name}</span> ) }
	        </p>
		);
	}
    
    
    renderDrugs(drugs) {

        if (drugs.length == 0) {
            return (
	            	<div className="col-sm-12 col-md-12 col-lg-12">
	            		loading...
            		</div>
            );
        }
    	
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
	        					<button type="button" className="btn btn-xs btn-like" onClick={() => this.addToTakingList(drug.id)}>
	        						<span className="glyphicon glyphicon-heart white"></span>
	        					</button>
	        				</li>
	        				<li>
	        					<button type="button" className="btn btn-xs btn-add" onClick={() => this.addToRememberList(drug.id)}>
	        						<span className="glyphicon glyphicon-plus white"></span>
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

        const drugs = this.state.drugs;

        return (
	        	<div className="container no-banner">
		    		<div className='page-header'>
						<h3>{t('drugs')}</h3>
					</div>
					{User.isAuthenticated() &&
		                <div className="text-box">
							{this.state.cmd == "taking" && t('drugTakingListDescriptionText').replace("%User.firstname%", firstname).replace("%User.lastname%", lastname)}
							{this.state.cmd == "remember" && t('drugRememberListDescriptionText').replace("%User.firstname%", firstname).replace("%User.lastname%", lastname)}
		                		{this.state.cmd == "list" && t('drugListAllDescriptionText').replace("%User.firstname%", firstname).replace("%User.lastname%", lastname)}
		                </div>
					}
	                <div className="row">
		                <ul className="drug-list">
		                    {this.renderDrugs(drugs)}
		                </ul>
	                </div>
	            </div>
        );
    }
}


export default translate()(DrugList);