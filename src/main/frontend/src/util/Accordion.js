import React from "react";

import User from "./User";

import {Link} from "react-router-dom";
import {translate} from "react-i18next";

class Accordion extends React.Component {
	  constructor(props) {
	    super(props);
	    
	    this.state = {
	    		show		: false,
	    		section	: this.props.section
	    }

        this.toggleShow = this.toggleShow.bind(this);
	  }

	  toggleShow(event) {
		  this.state.show = !this.state.show;
		  this.setState(this.state);
	  }
	  
	  // for html conversion
	  createMarkup(text) { return {__html: text}; };
	    

	  render() {
	    const show = this.state.show;
	    const section = this.state.section;
	  
	    if(!section) {
	    		return null;
	    }
	    
	    return (	
                <div className="panel panel-default">
                		<div className="panel-heading" onClick={this.toggleShow}>
                			<h4 id="packaging-heading-section.topic.id" className="panel-title">
                				<a>{section.topic.title}</a>
                			</h4>
                		</div>
                		{show && <div>
		                			<div className="panel-body" dangerouslySetInnerHTML={this.createMarkup(section.text)} />
		                		</div> }
                	</div>
          );
	  }
	}

export default translate()(Accordion);