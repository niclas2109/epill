import React from "react";
import {CookiesProvider} from "react-cookie";
import ReactDOM from "react-dom";

import {I18nextProvider} from "react-i18next";
import {HashRouter as Router} from "react-router-dom";

import User from "./util/User";
import Navigation from "./util/Navigation";

import i18n from "./i18n";


// Force initialization of the object.
User.isAuthenticated();

ReactDOM.render(
    <CookiesProvider>
        <I18nextProvider i18n={i18n}>
            <Router>
            		<Navigation />
            </Router>
        </I18nextProvider>
    </CookiesProvider>,
    document.getElementById('root'));
