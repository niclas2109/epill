import React from "react";
import axios from "axios";

import {Link} from "react-router-dom";
import {translate} from "react-i18next";

class UserMenue extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	    		drugs	: [],
	    		exp		: '',
	    		show		: false
	    }

        this.handleExpressionChange = this.handleExpressionChange.bind(this);
	  }
	  
	  handleExpressionChange(event) {
		  this.state.exp = event.target.value
		  this.state.show= true;
		  	
	      this.setState(this.state);
		  	
	      axios.get('/drug/list/all')
	      	.then(({data}) => {
	      		this.state.drugs = data.value
	      		this.setState(this.state);
	        });
	  }
	  
	  hide(event) {

	  }
	  
	  renderResults(drugs) {
			return drugs.map(drug => <li key={drug.id}><Link to={`/drug/${drug.id}`}>{drug.name}</Link></li> );
	  }

	  render() {
	    const {t} = this.props;
	    const drugs	= this.state.drugs;
	    const show	= this.state.show;

	    return (
	    		<div>
		    		<form className="navbar-form navbar-left">
		    			<div className="col-sm-12 col-md-12 col-lg-12">
		    				<div className="row">
		    					<input type="text" value={this.state.password} onChange={this.handleExpressionChange} name="search" className="form-control" placeholder="search drug" autoComplete="off" autoCorrect="off" autoCapitalize="off" />
		    					<button className="btn btn-outline-success btn-search" type="submit">
		    						<span className="glyphicon glyphicon-search"></span>
		    					</button>
		    				</div>
		    				{show && this.state.exp.length > 0 && <div className="row">
		    					<ul className="ui-autocomplete">
    								{this.renderResults(drugs)}
		    						{drugs.length == 0 && <li className="no-results">leider keine passenden Ergebnisse gefunden</li> }
		    					</ul>
		    				</div> }
		    			</div>
		    		</form>
		    	</div>
	    );
	  }
	}

export default translate()(UserMenue);