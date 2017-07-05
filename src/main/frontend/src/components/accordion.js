import React from "react";

import User from "./../util/User";

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
	    this.togglePersonalized	= this.togglePersonalized.bind(this);
	  }

	  toggleShow(event) {
		  this.state.show = !this.state.show;
		  this.setState(this.state);
	  }
	  
	  togglePersonalized(section) {
		  this.state.section.isTailored = !this.state.section.isTailored;
		  this.setState(this.state);
		  
		  this.props.toggleOriginalAndTailoredText(this.state.section);
	  }
	  
	  // for html conversion
	  createMarkup(text) { return {__html: text}; };
	    

	  render() {
	    const show = this.state.show;
	    const section = this.state.section;
	  
	    if(!section) {
	    		return null;
	    }

		const {t} = this.props;
		  
	    return (	
                <div className="panel panel-default">
                		<div className="panel-heading">
                			{show && this.props.toggleOriginalAndTailoredText &&
	                			<div className="pull-right">
	                				<button type="button" className="btn btn-default" onClick={() => this.togglePersonalized(section)} >
	                					{ section.isTailored ? t('getOriginalText') : t('getPersonalizedText') }
	                				</button>
	                			</div>
                			}
                			<h4 id="packaging-heading-section.topic.id" className="panel-title" onClick={this.toggleShow}>
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