import React from "react";
import ReactDOM from "react-dom";

import {CookiesProvider} from "react-cookie";
import {I18nextProvider} from "react-i18next";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import i18n from "./i18n";

import User from "./util/User";

import Navigation from "./components/navigation";
import Footer from "./components/footer";

import Home from "./components/home";
import About from "./components/about";
import Authentication from "./components/authentication";
import Register from "./components/register";
import DrugList from "./components/drug_list";
import DrugDetail from "./components/drug_detail";

import UserData from "./components/user/data";
import UserSettings from "./components/user/settings";


//Design decision: We use a global parent component for inter-sibling communication.
class Root extends React.Component {
    constructor(props) {
        super(props);
        // Force initialization of the object.
        User.isAuthenticated();
        this.updateAuthentication = this.updateAuthentication.bind(this);
    }

    // This is called whenever the authentication state of a user is changed by a component. Additionally,
    // this is an example of intersibling communication with a common parent.
    updateAuthentication() {
        this.nav.updateAuthentication();
    }

    render() {
        return (
            <div>
                <Navigation ref={(component) => {
                    this.nav = component;
                }}/>
                <Switch>
	                {/* Authentication */}
	                <Route path="/user/login" component={Authentication}/>
	                <Route path="/user/register" component={Register}/>
	
	                {/* Drug handling */}
	                <Route path="/drug/list" component={DrugList}/>
	                <Route path="/drug/taking" component={DrugList}/>
	                <Route path="/drug/remember" component={DrugList} />
	                <Route path="/drug/:id" component={DrugDetail}/>
	
	                {/* User sites */}
	                <Route path="/user/rememberedDrugs" component={DrugList}/>
	                <Route path="/user/takenDrugs" component={DrugList}/>
	                <Route path="/user/data" component={UserData}/>
	                <Route path="/user/settings" component={UserSettings}/>
	                
	                {/* Information sites */}
	                <Route path="/about" component={About} />
	                
	                {/* Default route */}
	                <Route path="/" component={Home} />
	            </Switch>
	            <ToastContainer />
	            <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <CookiesProvider>
        <I18nextProvider i18n={i18n}>
            <Router>
                <Root />
            </Router>
        </I18nextProvider>
    </CookiesProvider>
    , document.getElementById('root'));