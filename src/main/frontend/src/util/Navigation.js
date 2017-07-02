import React from "react";

import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import {translate} from "react-i18next";

import User from "./User";
import UserMenue from "./UserMenue";
import AutoComplete from "./../util/AutoComplete";


import Home from "./../components/home";
import About from "./../components/about";
import Authentication from "./../components/authentication";
import Register from "./../components/register";
import DrugList from "./../components/drug_list";
import DrugDetail from "./../components/drug_detail";

import UserData from "./../components/user/data";
import UserSettings from "./../components/user/settings";
import UserList from "./../components/user/list";
import UserTakingDrugList from "./../components/user/user_taking_drug_list.js";
import UserRememberDrugList from "./../components/user/user_remember_drug_list.js";

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
		            						<button type="button" className="navbar-toggle collapsed" onClick={this.toggleShow}>
		            							<span className="icon-bar"></span>
		            							<span className="icon-bar"></span>
		            							<span className="icon-bar"></span>
		            						</button>
		            						<Link to="/" className="navbar-brand">
		            						 	<img src="/assets/images/logo_v.svg" className="logo"></img>
		            						 </Link>
		            					</div>
		            					{show &&
		            						<div className="navbar-collapse" id="bs-example-navbar-collapse-1">
			            						<ul className="nav navbar-nav">
			            							<li><Link to="/about">{t("about")}</Link></li>
			            							<li><Link to="/drug/list">{t("drugs")}</Link></li>
			            						</ul>
			            	
			            						<AutoComplete />
			            	
			            						<UserMenue />
			            					</div>
		            					}
	            						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		            						<ul className="nav navbar-nav">
		            							<li><Link to="/about">{t("about")}</Link></li>
		            							<li><Link to="/drug/list">{t("drugs")}</Link></li>
		            						</ul>
		            	
		            						<AutoComplete />
		            	
		            						<UserMenue />
		            					</div>
		            				</div>
		            			</nav>
		            		</div>
		            	</div>
	                    
	                    <div>
		                    <Switch>
		                        {/* Authentication */}
		                        <Route path="/user/login" component={Authentication}/>
		                        <Route path="/user/register" component={Register}/>
		
		                        {/* Drug handling */}
		                        <Route path="/drug/list" component={DrugList}/>
		                        <Route path="/drug/taking" component={UserTakingDrugList}/>
		                        <Route path="/drug/remember" component={UserRememberDrugList} />
		                        <Route path="/drug/:id" component={DrugDetail}/>
	
		                        {/* User sites */}
		                        <Route path="/user/rememberedDrugs" component={DrugList}/>
		                        <Route path="/user/takenDrugs" component={DrugList}/>
		                        <Route path="/user/data" component={UserData}/>
		                        <Route path="/user/settings" component={UserSettings}/>
		                        <Route path="/user/list" component={UserList}/>
		                        
		                        {/* Information sites */}
		                        <Route path="/about" component={About} />
		                        
		                        {/* Default route */}
		                        <Route path="/" component={Home} />
		                    </Switch>
	                    </div>
	                    
	            	    <footer className="footer">
		    	    			<div className="container">
		    	    				<div className="row bottom-rule">
		    	    					<div className="col-sm-4 footer-section">
		    	    						<strong>Connect with us</strong>
		    	    						<p>Email promotions, news, and information</p>
		    	    						<form className="form-inline">
		    	    							<div className="form-group">
		    	    								<label className="sr-only" htmlFor="inputEmail">Email</label> <input
		    	    									type="email" className="form-control" id="inputEmail"
		    	    									placeholder="address@example.com" />
		    	    							</div>
		    	    							<button type="submit" className="btn btn-default">Subscribe</button>
		    	    						</form>
		    	    					</div>
		    	    					<div className="col-sm-5 footer-section">
		    	    						<ul className="list-inline">
		    	    							<li className="text-uppercase">ePill:</li>
		    	    							<li><a href="https://www.uni-kassel.de/fb07/institute/ibwl/personen-fachgebiete/sunyaev-prof-dr/team.html" target="blank">Team</a></li>
		    	    							<li><a href="https://www.uni-kassel.de/fb07/institute/ibwl/personen-fachgebiete/sunyaev-prof-dr/research.html" target="blank">Articles</a></li>
		    	    							<li><a href="#!/about">Why Register?</a></li>
		    	    						</ul>
		    	    						<ul className="list-inline">
		    	    							<li className="text-uppercase">{t("help")}:</li>
		    	    							<li><a href="#!/sitemap">{t("funcion")}</a></li>
		    	    							<li><a href="#!/privacy">{t("privacy")}</a></li>
		    	    						</ul>
		    	    					</div>
		    	    					<div className="col-sm-3">
		    	    						<address>
		    	    							<strong>Universität Kassel</strong><br /> Henschelstraße 4<br />
		    	    							34127, Kassel<br /> (+49) 561-804-3450<br />
		    	    							<a href="mailto:sunyaev@uni-kassel.de">Contact Us</a>
		    	    						</address>
		    	    					</div>
		    	    				</div>
		    	    				<div className="row bottom-rule">
		    	    					<div className="col-sm-12">
		    	    						<nav className="navbar navbar-default navbar-footer">
		    	    							<ul className="nav navbar-nav">
		    	    								<li><a href="#">{t("customerCare")}</a></li>
		    	    								<li><a href="#">News</a></li>
		    	    								<li><a href="#">{t("imprint")}</a></li>
		    	    							</ul>
		    	    						</nav>
		    	    					</div>
		    	    				</div>
		    	    				<div className="row leg-room">
		    	    					<div className="col-md-12 text-center">
		    	    						<h3 className="text-uppercase">ePill</h3>
		    	    						<p className="monospaced">
		    	    							&copy;2017 ePill <span className="text-uppercase">All Rights Reserved</span>
		    	    						</p>
		    	    					</div>
		    	    				</div>
		    	    			</div>
		    	    		</footer>
		          </div>
		  );
	  }
}

export default translate()(Navigation);