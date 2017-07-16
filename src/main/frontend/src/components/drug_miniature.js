import axios from "axios";
import React from "react";

import {Link} from "react-router-dom";
import {translate} from "react-i18next";

class DrugMiniature extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
        		invocation: this.props.invocation
        }
    }


    componentWillMount() {

    }
    
    componentWillReceiveProps(props){
    		this.props = props;
     }


    render() {

        const {t} = this.props;
        const invocation = this.state.invocation;
        
        return (
        		<div className="drug-min-profile col-xs-6 col-sm-4 col-md-4 col-lg-2">
        			<Link to={`/drug/${invocation.drug.id}/de`}>
	        			<div className="image-container">
	        				<img src="http://www.benefit-online.de/fileadmin/content/magazin/gesundheit/Medikamente2.jpg" alt={invocation.timestamp} className="img-responsive center-block"></img>
	        			</div>
		      		<p>{invocation.drug.name}</p>
	      		</Link>
        		</div>
        );
    }
}

export default translate()(DrugMiniature);