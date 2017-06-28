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
                    <div className="menu">
                        <Link to="/">Drug List</Link>
                        <Link to="/user/register">Register</Link>
                        <Link to="/user/login">Login</Link>
                    </div>
                    <Switch>
                        {/*Authentication*/}
                        <Route path="/user/login" component={Authentication}/>
                        <Route path="/user/register" component={Register}/>

                        {/*Post handling*/}
                        <Route path="/drug/:id" component={DrugDetail}/>

                        {/*Default route*/}
                        <Route path="/" component={DrugList}/>
                    </Switch>
                </div>
            </Router>
        </I18nextProvider>
    </CookiesProvider>,
    document.getElementById('root'));

