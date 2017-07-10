import axios from "axios";
import React from "react";

import {translate} from "react-i18next";
import { toast } from 'react-toastify';

import Accordion from "./accordion";
import Loading from "./loading";
import User from "./../util/User";

class DrugDetail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            drug: undefined
        }
        
        this.toggleOriginalAndTailoredText = this.toggleOriginalAndTailoredText.bind(this);
    }

    init() {
        axios.get(`/drug/${this.props.match.params.id}/de`)
        .then(({data, status}) => {
            this.setState({
                drug: data
            });
        });
    }
    
    componentWillMount() {
		this.init();
    }
    
    componentWillReceiveProps(props){
    		this.props = props;
        this.init();
     }
    
    //=============================
    
    toggleOriginalAndTailoredText(section) {

    		var url = (section.isTailored) ? `packagingSection/tailored/${section.topic.id}/${this.props.match.params.id}` : `packagingSection/${section.topic.id}/${this.props.match.params.id}`;

    		axios.get(url).then(({data, status}) => {

        	 	switch(status) {
        	 		case 200:
        	 			var idx = -1;
        	 			for(var i=0; i<this.state.drug.packagingSection.length; i++) {
        	 				if(this.state.drug.packagingSection[i]["id"] == section["id"]) {
        	 					idx = i;
        	 					break;
        	 				}
        	 			}
        	 			
                		this.state.drug.packagingSection[idx] = data;
                		this.setState(this.state);
                		
        	 			break;
        	 		default:
        	 			const {t} = this.props;
        	 			const options = {
        	 				position: toast.POSITION.BOTTOM_CENTER
        	 			};
        	 			toast.error(t('errorOccured'), options);
        	 			break;
        	 	}
         });

    }
    
    
    //=============================
    
    toggleTaking(drug) {
		if(drug.isTaken) {
			this.removeFromTakingList(drug.id);
		} else {
			this.addToTakingList(drug.id);
		}
    }
    
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
                     this.state.drug.isTaken = true;
                     this.setState(this.state.drug);
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
                     this.state.drug.isTaken = !this.state.drug.isTaken;
                     this.setState(this.state.drug);
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
			this.removeFromRememberList(drug.id);
		} else {
			this.addToRememberList(drug.id);
		}
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
                     this.state.drug.isRemembered = true;
                     this.setState(this.state.drug);
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
                     this.state.drug.isRemembered = !this.state.drug.isRemembered;
                     this.setState(this.state.drug);
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
    
    
    //=============================
    
    
    renderDrugFeatures(drug) {
		
		if(!drug.drugFeature)
			return;
		
		return (
        		<p>
        			{ drug.drugFeature.map(feature => <img key={feature.id} src={"./../../assets/icons/"+feature.id + ".svg"} alt={feature.drugFeature} title={feature.drugFeature} className="drug-feature-icon"></img> ) }
        		</p>
		);
    }
    
	renderDisease(drug) {
		if(!drug.disease) {
			return;
		}

        const {t} = this.props;
        return (
        		<p>{t('usedWhen')}: 
        			{ drug.disease.map(disease => <span key={disease.id}>{disease.name}</span> ) }
	        </p>
		);
	}
	
	renderActiveSubstance(drug) {
		if(!drug.activeSubstance) {
			return;
		}

        const {t} = this.props;
        
        return (
        		<p>{t('activeSubstance')}: 
        			{ drug.activeSubstance.map((substance, i) => <span key={substance.id}>{substance.name}</span> ) }
	        </p>
		);
	}
	
	renderPZN(drug) {
		if(!drug.packaging) {
			return;
		}
		
        return (
        	<p> PZN: 
	        	{ drug.packaging.map((packaging, i) => <span key={packaging.id}>{packaging.name} {packaging.pzn}</span> ) }
	        </p>
		);
	}
    
    renderSectionOverview(drug) {
    		if(!drug.packagingSection) {
			return;
		}

        return drug.packagingSection.map((section => {
            return (
            	<li key={section.id}><a>{section.topic.title}</a></li>
            );
        }));
    }

    renderSectionList(drug) {
    		if(!drug.packagingSection) {
			return;
		}
   
    		//TODO: toggle does not work anymore!
    		
    		return drug.packagingSection.map((section => {
            return (	<Accordion section={section} toggleOriginalAndTailoredText={this.toggleOriginalAndTailoredText} key={section.id} /> );
        }));
    }
    
    render() {

        const {t} = this.props;
        const drug = this.state.drug;
        
        if (!drug) {
            // Do not show anything while loading.
            return (
                	<div className="container marketing no-banner">
	            		<div className='page-header'>
	            			<h3> </h3>
	            		</div>
	            		<Loading />
            		</div>
            );
        }
        
        return (
        	<div className="container marketing no-banner">
        		<div className='page-header'>
        			<div className='btn-toolbar pull-right'>
        				<div className='btn-group'></div>
        			</div>
        			{User.isAuthenticated()
        				&&
	        			<div className='btn-toolbar pull-right'>
		        		    <div className='btn-group'>
			    				<button type="button" className="btn btn-like" onClick={() => this.toggleTaking(drug)}>
								<span className={"glyphicon white" + ((!drug.isTaken) ? " glyphicon-heart" : " glyphicon-minus")}></span>
							</button>
							
		        				<button type="button" className="btn btn-add" onClick={() => this.toggleRemember(drug)}>
		        					<span className={"glyphicon white" + ((!drug.isRemembered) ? " glyphicon-plus" : " glyphicon-minus")}></span>
		        				</button>
		        		    </div>
		        		  </div>	
	        			}
        			
        			<h3>{drug.name} {drug.productGroup && <span className="text-muted">drug.productGroup.name</span> }</h3>
        			<span>v. {drug.version} | {t('publishingDate')}: {new Date(drug.year).toLocaleDateString()}</span>
  
        		</div>
        		<div className="row featurette">
        			<div className="col-xs-12 col-sm-12 col-md-3">
        				<img className="featurette-image img-responsive center-block" alt="{drug.name}" src="http://www.benefit-online.de/fileadmin/content/magazin/gesundheit/Medikamente2.jpg"></img>
                		<div className="drug-features margin-s">
	    					{this.renderDrugFeatures(drug)}
	            		</div>
        			</div>
        			<div className="col-xs-12 col-sm-12 col-md-6">
        				{ User.isAuthenticated() && drug.personalizedInformation && <p>{drug.personalizedInformation.replace("%User.firstname%", User.firstname).replace("%User.lastname%", User.lastname)}</p> }
      
        				{ this.renderDisease(drug) }
        				
        				{drug.indicationGroup &&
	        				<p>
	        					{t('indicationGroup')}:<span>{drug.indicationGroup.name}</span>
	        				</p>
        				}
        				
        				{this.renderActiveSubstance(drug)}

        				{this.renderPZN(drug)}

        			</div>
        			<div className="hidden-xs hidden-sm col-md-3 drug-detail-short-links">
        				<ul>
        					{this.renderSectionOverview(this.state.drug)}
        				</ul>
        			</div>
        		</div>

        		<hr />
        		
        		{this.renderSectionList(drug)}

        	</div>
        );
    }
}

export default translate()(DrugDetail);