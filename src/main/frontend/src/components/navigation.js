import React from "react";

import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import {translate} from "react-i18next";

import User from "./../util/User";
import UserMenue from "./user_menue";
import AutoComplete from "./auto_complete";


class Navigation extends React.Component {
	  constructor(props) {
	    super(props);
	    this.status = {
	    		show		: false
	    }

	    this.toggleShow = this.toggleShow.bind(this);
	  }

	  toggleShow(event) {
		  this.status.show = !this.status.show;
		  this.setState(this.status);
	  }
	  
	  render() {

	      const {t} = this.props;
	      const show = this.status.show;
		  
		  return (
	                <div>
		                <div className="navbar-wrapper">
		            		<div className ="container">
		            			<nav className="navbar navbar-inverse navbar-static-top">
		            				<div className="container">
		            					<div className="navbar-header">
		            						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
	            							<span className="icon-bar"></span>
	            							<span className="icon-bar"></span>
	            							<span className="icon-bar"></span>
	            						</button>
		            						<Link to="/" className="navbar-brand">
		            						 	<img src="/assets/images/logo_v.svg" className="logo"></img>
		            						 </Link>
		            					</div>
		            					<div id="navbar" className="collapse navbar-collapse">
		            						<ul className="nav navbar-nav">
		            							<li data-toggle="collapse" data-target=".nav-collapse"><Link to="/about">{t("about")}</Link></li>
		            							<li data-toggle="collapse" data-target=".nav-collapse"><Link to="/drug/list">{t("drugs")}</Link></li>
		            						</ul>
		            	
		            						<AutoComplete />
		            	
		            						<UserMenue />
		            					</div>
		            				</div>
		            			</nav>
		            		</div>
		            	</div>
		          </div>
		  );
	  }
}

export default translate()(Navigation);