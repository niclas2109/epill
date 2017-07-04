import axios from "axios";
import React from "react";

import {Link} from "react-router-dom";
import {translate} from "react-i18next";
import { toast } from 'react-toastify';

// See https://facebook.github.io/react/docs/forms.html for documentation about forms.
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        		firstname	: '',
        		lastname		: '',
        		username		: '',
        		gender		: {id : 0},
        		password		: '',
        		passwordRepeat: '',
            	sending		: false
        };

        this.handleFirstnameChange	= this.handleFirstnameChange.bind(this);
        this.handleLastnameChange	= this.handleLastnameChange.bind(this);
        this.handleGenderChange		= this.handleGenderChange.bind(this);

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordRepeatChange = this.handlePasswordRepeatChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFirstnameChange(event) {
    		this.state.firstname = event.target.value;
    		this.setState(this.state);
    }

    handleLastnameChange(event) {
		this.state.lastname = event.target.value;
		this.setState(this.state);
    }
    
    handleGenderChange(event) {
    		this.state.gender = event.target.value;
    		this.setState(this.state);
    }
    
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
		this.state.username = event.target.value;
		this.setState(this.state);
    }

    handlePasswordChange(event) {
		this.state.password = event.target.value;
		this.setState(this.state);
    }

    handlePasswordRepeatChange(event) {
		this.state.passwordRepeat = event.target.value;
		this.setState(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const {t} = this.props;
        const options = {
        	    position: toast.POSITION.BOTTOM_CENTER
        };
        
        if(this.state.firstname.length == 0 || this.state.lastname.length == 0 || this.state.username.length == 0 || this.state.password == 0) {
        		return;
        }
        
        if(this.state.password != this.state.passwordRepeat) {
        		toast.error(t('passwordsDifferent'), options);
	        	return;
        }
        this.state.sending = true;
        this.setState(this.state);
        
        axios.post('/user/save',
            {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                gender: { id: this.state.gender },
                username: this.state.username,
                password: this.state.password
            }, {
                // We allow a status code of 401 (unauthorized). Otherwise it is interpreted as an error and we can't
                // check the HTTP status code.
                validateStatus: (status) => {
                    return (status >= 200 && status < 300) || status == 409
                }
            })
            .then(({data, status}) => {

	            this.state.sending = false;
	            this.setState(this.state);
	            
	            	switch (status) {
	                case 200:
            				toast.success(t('registrationSuccess'), options);
		    	            	this.props.history.push("/user/login");
		    	            	break;
	                case 409:
                			toast.error(t('usernameUsed'), options);
	                    	break;
	            } 	
            	});
    }


    render() {
        const {t} = this.props;
        
        return (
        		<div className="container no-banner">
	        		<div className="page-header">
	        			<h2>{t('register')}</h2>
	        		</div>
	        		<div className="container">
		                <form onSubmit={this.handleSubmit} className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-0 col-lg-4 col-lg-offset-0 column">
			                <div className="form-group">
			                    <label htmlFor="firstname">{t('firstname')}</label>
			                    <input type="text" name="firstname" id="firstname" className="form-control" value={this.state.firstname} onChange={this.handleFirstnameChange} />
			                </div>
			                
			                <div className="form-group">
			                   <label htmlFor="lastname">{t('lastname')}</label>
			                   <input type="text" name="lastname" id="lastname" className="form-control" value={this.state.lastname} onChange={this.handleLastnameChange} />
			                </div> 

			                <div className="form-group">
			                   <label htmlFor="gender">{t('gender')}</label>
			                   <select id="gender" value="0" name="gender" className="form-control" title={t('gender')} value={this.state.gender} onChange={this.handleGenderChange}>
	                           		<option value="0" disabled>{t('noInfo')}</option>
			                         <option value="2">{t('female')}</option>
			                         <option value="1">{t('male')}</option>
			                    </select>
			               </div>
			                 
				            <div className="form-group">
				                <label htmlFor="username">{t('username')}</label>
				                <input type="text" name="username" id="username" className="form-control" value={this.state.username} onChange={this.handleUsernameChange} />
				            </div>
				            	
				            <div className="form-group">
				                <label htmlFor="password">{t('password')}</label>
				                <input type="password" name="password" id="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} />
				            </div>
				            	
						    <div className="form-group">
				                <label htmlFor="password_rep">{t('passwordRepeat')}</label>
				                <input type="password" name="password_rep" id="password_rep" className="form-control" value={this.state.password_repeat} onChange={this.handlePasswordRepeatChange} />
				            </div>
	
				            <div className="form-actions">
				            {!this.state.sending ?
		            				<button type="submit" className="btn btn-primary">{t('register')}</button>
		            				: <button className="btn btn-default"><img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="></img></button> }
				            		<Link to="/user/login"><button type="button" className="btn btn-default">{t('login')}</button></Link>
					        </div>
		                </form>
		                <div className="hidden-xs hidden-sm col-md-6 col-lg-4 container">
		                			<h4>Warum du dich registrieren kannst?</h4>
		                			<p>Es gibt viele tolle Features, die dir dabei helfen können,<br />
		                			dein Verständnis für Medikamente zu verbessern.</p>
		                			<p>Beispielsweise können wir dir genau die Informationen...</p>
		                </div>
		           </div>
		       </div>
		              
        );
    }
}

export default translate()(Register);