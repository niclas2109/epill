import axios from "axios";
import React from "react";

import Accordion from "../util/Accordion";
import User from "../util/User";

class DrugDetail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            drug: undefined
        }
    }

    componentWillMount() {
        axios.get(`/drug/${this.props.match.params.id}/de`)
            .then(({data}) => {
                this.setState({
                    drug: data.value
                });
            });
    }
    
    //=============================
    
    addToTakingList(id) {
    	 	axios.post('/drug/taking/add', { id : id }, {
	            validateStatus: (status) => {
	                return (status >= 200 && status < 300) || status == 400 || status == 401
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
 
    
    
    //=============================
    
    
    // for html conversion
	createMarkup(text) { return {__html: text}; };
    

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
		
        return (
        	<p> U. a. verwendet bei: 
	        	{ drug.disease.map((packaging, i) => <span key={disease.id}>{disease.name}</span> ) }
	        </p>
		);
	}
	
	renderActiveSubstance(drug) {
		if(!drug.activeSubstance) {
			return;
		}
		
        return (
        	<p> Wirkstoff(e): 
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
    		
    		return drug.packagingSection.map((section => {
            return (	<Accordion section={section} key={section.id} /> );
        }));
    }
    
    render() {
        const drug = this.state.drug;
        
        if (!drug) {
            // Do not show anything while loading.
            return (
                	<div className="container marketing no-banner">
	            		<div className='page-header'>
	            			<h3> </h3>
	            		</div>
	            		loading...
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
			    				<button type="button" className="btn btn-like" onClick={() => this.addToTakingList(drug.id, event)}>
								<span className="glyphicon glyphicon-heart"></span>
							</button>
							
		        				<button type="button" className="btn btn-add" onClick={() => this.addToRememberList(drug.id, event)}>
		        					<span className="glyphicon glyphicon-plus"></span>
		        				</button>
		        		    </div>
		        		  </div>	
	        			}
        			
        			<h3>{drug.name} {drug.productGroup && <span className="text-muted">drug.productGroup.name</span> }</h3>
  
        		</div>
        		<div className="row featurette">
        			<div className="col-md-3">
        				<img className="featurette-image img-responsive center-block" alt="{drug.name}" src="http://www.benefit-online.de/fileadmin/content/magazin/gesundheit/Medikamente2.jpg"></img>
                		<div className="drug-features margin-s">
	    					{this.renderDrugFeatures(drug)}
	            		</div>
        			</div>
        			<div className="col-xs-9 col-md-6">
        				{ User.isAuthenticated() && drug.personalizedInformation && <p>{drug.personalizedInformation.replace("%User.firstname%", User.firstname).replace("%User.lastname%", User.lastname)}</p> }
      
        				{this.renderDisease(drug)}
        				
        				<p>
        					Indikation-Gruppe:<span>drug.indicationGroup.name</span>
        				</p>
        				
        				{this.renderActiveSubstance(drug)}

        				{this.renderPZN(drug)}

        			</div>
        			<div className="col-xs-0 col-md-3 drug-detail-short-links">
        				<ul>
        					{this.renderSectionOverview(drug)}
        				</ul>
        			</div>
        		</div>

        		<hr />
        		
        		{this.renderSectionList(drug)}

        	</div>
        );
    }
}

export default DrugDetail;