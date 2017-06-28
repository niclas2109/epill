import React from "react";
import {CookiesProvider} from "react-cookie";
import ReactDOM from "react-dom";

import {I18nextProvider} from "react-i18next";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";

import Authentication from "./components/authentication";
import Register from "./components/register";
import DrugDetail from "./components/drug_detail";
import DrugList from "./components/drug_list";
import i18n from "./i18n";
import User from "./util/User";

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
	            							<li><Link to="/drug">Medikamente</Link></li>
	            						</ul>
	            	
	            						<autocomplete></autocomplete>
	            	
	            						<ul className="nav navbar-nav navbar-right">
	            							<li className="dropdown open">
	            								<Link to="/user" className="dropdown-toggle">
	            									Benutzername
	            								</Link>
	            								<ul className="dropdown-menu">
	            									<li><Link to="/like">my drugs</Link></li>
	            									<li><Link to="/compare">compare drugs</Link></li>
	            									<li><Link to="/user/1/settings/de/">settings</Link></li>
	            									<li><Link to="/user/1/de/">user data</Link></li>
	            									<li><Link to="/user/all/de/">users</Link></li>
	            									<li><Link to="">logout</Link></li>
	            								</ul></li>
	            						</ul>
	            						<ul className="nav navbar-nav navbar-right">
	            							<li className="dropdown open">
	            								<Link to="#" className="dropdown-toggle">
	            									login/register
	            								</Link>
	            								<ul className="dropdown-menu">
	            									<li><Link to="/user/login">login</Link></li>
	            									<li><Link to="/user/register">register</Link></li>
	            								</ul></li>
	            						</ul>
	            					</div>
	            				</div>
	            			</nav>
	            		</div>
	            	</div>
                    
                    
                    <Switch>
                        {/* Authentication */}
                        <Route path="/user/login" component={Authentication}/>
                        <Route path="/user/register" component={Register}/>

                        {/* Post handling */}
                        <Route path="/drug/:id" component={DrugDetail}/>

                        {/* Default route */}
                        <Route path="/" component={DrugList}/>
                    </Switch>
                </div>
            </Router>
        </I18nextProvider>
    </CookiesProvider>,
    document.getElementById('root'));

