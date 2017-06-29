import axios from "axios";
import React from "react";

import {Link} from "react-router-dom";

import {translate} from "react-i18next";

// See https://facebook.github.io/react/docs/forms.html for documentation about forms.
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	firstname: '',
            lastname: '',
        	username: '',
            password: '',
            passwordRepeat: ''
        };

        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordRepeatChange = this.handlePasswordRepeatChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFirstnameChange(event) {
    	this.setState({firstname: event.target.value});
    }

    handleLastnameChange(event) {
    	this.setState({lastname: event.target.value});
    }
    
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handlePasswordRepeatChange(event) {
        this.setState({passwordRepeat: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if(this.state.password != this.state.passwordRepeat) {
        	console.log("different passwords");
        	return;
        }
        
        axios.post('/user/save',
            {
            	firstname	: this.state.firstname,
            	lastname	: this.state.lastname,
                username	: this.state.username,
                password	: this.state.password
            })
            .then((data) => {
                // Redirect to front page.
            	console.log(data);
            	this.props.history.push("/user/login");
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
		                <form onSubmit={this.handleSubmit}>

			                <div className="form-group">
			                    <label htmlFor="firstname">{t('firstname')}</label>
			                    <input type="text" name="firstname" id="firstname" className="form-control" value={this.state.firstname} onChange={this.handleFirstnameChange} />
			                </div>
			                
			                <div className="form-group">
			                   <label htmlFor="lastname">{t('lastname')}</label>
			                   <input type="text" name="lastname" id="lastname" className="form-control" value={this.state.lastname} onChange={this.handleLastnameChange} />
			                </div> 
		                    
		                
				            <div className="form-group">
				                <label htmlFor="username">{t('username')}</label>
				                <input type="text" name="username" id="username" className="form-control" value={this.state.username} onChange={this.handleUsernameChange} />
				            </div>
				            	
				            <div className="form-group">
				                <label htmlFor="password">{t('password')}</label>
				                <input type="text" name="password" id="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} />
				            </div>
				            	
						    <div className="form-group">
				                <label htmlFor="password_rep">{t('passwordRepeat')}</label>
				                <input type="text" name="password_rep" id="password_rep" className="form-control" value={this.state.password_repeat} onChange={this.handlePasswordRepeatChange} />
				            </div>
	
				            <div className="form-actions">
					            <button type="submit" className="btn btn-primary">{t('register')}</button>
					            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="></img>
					            <Link to="/user/login">{t('login')}</Link>
					        </div>
				            	
		                </form>
		           </div>
		       </div>
		              
        );
    }
}

export default translate()(Register);