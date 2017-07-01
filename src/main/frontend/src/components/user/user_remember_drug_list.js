import axios from "axios";
import React from "react";

import {Link} from "react-router-dom";
import {translate} from "react-i18next";

import User from "./../../util/User";

class UserRememberDrugList extends React.Component {
    constructor(props) {
        super();
        this.state = {
        		drugs: []
        }
    }

    // This function is called before render() to initialize its state.
    componentWillMount() {
        axios.get('/drug/list/remember')
            .then(({data}) => {
                this.setState({
                    drugs: data.value
                });
            });
    }

    //=============================
    
    removeFromRememberedList(id) {
	 	axios.post('/drug/remember/remove', { id : id }, {
            validateStatus: (status) => {
                return (status >= 200 && status < 300) || status == 400 || status == 401
            }
 		})
	     .then(({data, status}) => {
	    	 
	         switch (status) {
	             case 200:
	                 this.state.drugs = this.state.drugs.filter(drug => drug.id !== id);
	                 this.setState(this.state);
	                 break;
	             case 400:
	              	console.log(data, "not available");
	                 break;
	             case 401:
	             	console.log(data, "not permitted");
	                	break;
	         }
	     });
	}
    
    addToTakingList(id) {
	 	axios.post('/drug/taking/add', { id : id }, {
            validateStatus: (status) => {
                return (status >= 200 && status < 300) || status == 400 || status == 401 || status == 405
            }
 		})
	     .then(({data, status}) => {
	    	 
	         switch (status) {
	             case 200:
	                 console.log(data, "added");
	                 break;
	             case 400:
	              	console.log(data, "not available");
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

        const {t} = this.props;
        
        if (!drugs.length) {
            return (
	            	<div className="col-sm-12 col-md-12 col-lg-12">
	            		{t("emptyList")}
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
	        					<button type="button" className="btn btn-xs btn-like" onClick={() => this.addToTakingList(drug.id, event)}>
	        						<span className="glyphicon glyphicon-heart"></span>
	        					</button>
	        				</li>
	        				<li>
	        					<button type="button" className="btn btn-xs btn-add" onClick={() => this.removeFromRememberedList(drug.id, event)}>
	        						<span className="glyphicon glyphicon-minus"></span>
	        					</button>
	        				</li>
	        				<li>
		        				<Link to={`/drug/${drug.id}`}>
		        					<button type="button" className="btn btn-xs btn-open">
		        						<span className="glyphicon glyphicon-eye-open"></span>
		        					</button>
		        				</Link>
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
			    		<div className='btn-toolbar pull-right'>
			            <div className='btn-group'>
			                	<button className="btn btn-default" disabled={drugs.length <= 1}>
									{t("checkForAdverseEffects")}
								</button>
			            </div>
			        </div>
					<h3>{t('drugsRemember')}</h3>
				</div>
				{User.isAuthenticated() &&
		                <div className="text-box">
		                		{t('drugRememberListDescriptionText').replace("%User.firstname%", firstname).replace("%User.lastname%", lastname)}
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


export default translate()(UserRememberDrugList);