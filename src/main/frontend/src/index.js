import React from "react";
import {CookiesProvider} from "react-cookie";
import ReactDOM from "react-dom";

import {I18nextProvider} from "react-i18next";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";


import Carousel from "./components/carousel";
import Authentication from "./components/authentication";
import Register from "./components/register";
import DrugList from "./components/drug_list";
import DrugDetail from "./components/drug_detail";
import i18n from "./i18n";
import User from "./util/User";
import UserMenue from "./util/UserMenue";

// Force initialization of the object.
User.isAuthenticated();

ReactDOM.render(
    <CookiesProvider>
        <I18nextProvider i18n={i18n}>
            <Router>
                <div>
	                <div className="navbar-wrapper">
	            		<div className ="container">
	            			<nav className="navbar navbar-inverse navbar-static-top">
	            				<div className="container">
	            					<div className="navbar-header">
	            						<button type="button" className="navbar-toggle collapsed">
	            							<span className="icon-bar"></span>
	            							<span className="icon-bar"></span>
	            							<span className="icon-bar"></span>
	            						</button>
	            						<Link to="/" className="navbar-brand">
	            						 	<img src="/assets/images/logo_v.svg" className="logo"></img>
	            						 </Link>
	            					</div>
	            	
	            					<div className="collapse navbar-collapse"
	            						id="bs-example-navbar-collapse-1">
	            						<ul className="nav navbar-nav">
	            							<li><Link to="/about">About</Link></li>
	            							<li><Link to="/drug/list">Medikamente</Link></li>
	            						</ul>
	            	
	            						<autocomplete></autocomplete>
	            	
	            						<UserMenue />
	            					</div>
	            				</div>
	            			</nav>
	            		</div>
	            	</div>
                    
                    
                    <Switch>
                        {/* Authentication */}
                        <Route path="/user/login" component={Authentication}/>
                        <Route path="/user/register" component={Register}/>

                        {/* Get handling */}
                        <Route path="/drug/list" component={DrugList}/>
                        <Route path="/drug/:id" component={DrugDetail}/>

                        {/* Default route */}
                        <Route path="/" component={Carousel}/>	
                    </Switch>
                </div>
            </Router>
        </I18nextProvider>
    </CookiesProvider>,
    document.getElementById('root'));

ReactDOM.render(
	 <I18nextProvider i18n={i18n}>
	    <footer className="footer">
			<div className="container">
				<div className="row bottom-rule">
					<div className="col-sm-4 footer-section">
						<strong>Connect with Best Store</strong>
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
							<li className="text-uppercase">Help:</li>
							<li><a href="#!/sitemap">Functions</a></li>
							<li><a href="#!/privacy">Privacy</a></li>
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
								<li><a href="#">Customer Care</a></li>
								<li><a href="#">News</a></li>
								<li><a href="#">Impressum</a></li>
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
	</I18nextProvider>,
	document.getElementById('footer'));