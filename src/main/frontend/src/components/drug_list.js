import axios from "axios";
import React from "react";

import {Link} from "react-router-dom";
import {translate} from "react-i18next";

class DrugList extends React.Component {
    constructor(props) {
        super();
        this.state = {
        	drugs: []
        }
    }

    // This function is called before render() to initialize its state.
    componentWillMount() {
        axios.get('/drug/list/all')
            .then(({data}) => {
            	
                this.setState({
                    drugs: data.value
                });
            });
    }

    //=============================
    
    addToTakingList(id) {
    	 axios.post('/drug/taking/add',  { id : id }).then(({data}) => {
	         console.log(data);
         });
    }
    
    addToRememberList(id) {
	   	 axios.post('/drug/remember/add',  { id : id }).then(({data}) => {
	         console.log(data);
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
        	<p>
        		{ drug.drugFeature.map(feature => <span key={feature.id}>{feature.drugFeature}</span> ) }
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
    
    
    renderDrugs() {
    	
        const drugs = this.state.drugs;
        
        if (!drugs) {
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
        		</div>
        		<div className="action-pattern col-sm-1 col-md-1 col-lg-1">
        			<ul>
        				<li>
        					<button type="button" className="btn btn-xs btn-like" onClick={() => this.addToTakingList(drug.id)}>
        						<span className="glyphicon glyphicon-heart"></span>
        					</button>
        				</li>
        				<li>
        					<button type="button" className="btn btn-xs btn-add" onClick={() => this.addToRememberList(drug.id)}>
        						<span className="glyphicon glyphicon-plus"></span>
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
        		</div>
        	</li>
            );
        }));
    }


    render() {
        const {t} = this.props;
        return (
        	<div className="container no-banner">
	    		<div className='page-header'>
					<h3>Medikamente</h3>
				</div>
                <div className="text-box">
                	{t('drugListAllDescriptionText')}
                </div>
                <div className="row">
	                <ul className="drug-list">
	                    {this.renderDrugs()}
	                </ul>
                </div>
            </div>
        );
    }
}


export default translate()(DrugList);