import axios from "axios";
import React from "react";

import User from "../util/User";

class DrugDetail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            drug: undefined
        }
    }

    componentWillMount() {
    		console.log("load");
        axios.get(`/drug/${this.props.match.params.id}/de`)
            .then(({data}) => {
                this.setState({
                    drug: data.value
                });
            });
    }
    
 
    // for html conversion
	createMarkup(text) { return {__html: text}; };
    

    renderDrugFeatures(drug) {
		
		if(!drug.drugFeature)
			return;
		
        return (
        	<p>
        		{ drug.drugFeature.map((feature, i) => <span key={feature.id}>{feature.drugFeature}</span> ) }
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
            return (	
            	<div className="panel panel-default" key={section.id}>
            		<div className="panel-heading">
            			<h4 id="packaging-heading-section.topic.id" className="panel-title">
            				<a>{section.topic.title}</a>
            			</h4>
            		</div>
            		<div>
            			<div className="panel-body" dangerouslySetInnerHTML={this.createMarkup(section.text)} />
            		</div>
            	</div>
            );
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
        			<h3>
        				{drug.name} {drug.productGroup && <span className="text-muted">drug.productGroup.name</span> }
        				<button type="button" className="btn btn-xs btn-add">
        					<span className="glyphicon glyphicon-plus"></span>
        				</button>
        				<button type="button" className="btn btn-xs btn-like">
        					<span className="glyphicon glyphicon-heart"></span>
        				</button>
        			</h3>
        		</div>
        		<div className="row drug-features col-md-12 miniature">
					{this.renderDrugFeatures(drug)}
        			<img src="" alt="feature.drugFeature" title="feature.drugFeature" className="drug-feature-icon"></img>
        					
        		</div>
        		<div className="row featurette">
        			<div className="col-md-3">
        				<img className="featurette-image img-responsive center-block" alt="{drug.name}" src="http://www.benefit-online.de/fileadmin/content/magazin/gesundheit/Medikamente2.jpg"></img>
        			</div>
        			<div className="col-md-6">
        				<p>
        					{drug.personalizedInformation}
        				</p>
      
        				{this.renderDisease(drug)}
        				
        				<p>
        					Indikation-Gruppe:<span>drug.indicationGroup.name</span>
        				</p>
        				
        				{this.renderActiveSubstance(drug)}

        				{this.renderPZN(drug)}

        			</div>
        			<div className="col-md-3 drug-detail-short-links">
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