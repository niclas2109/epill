import axios from "axios";
import React from "react";

import {translate} from "react-i18next";

// See https://facebook.github.io/react/docs/forms.html for documentation about forms.
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	username: '',
            password: '',
            passwordRepeat: ''
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordRepeatChange = this.handlePasswordRepeatChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
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
                username: this.state.username,
                password: this.state.password
            })
            .then((data) => {
                // Redirect to front page.
                //this.props.history.push("/");
            });
    }


    render() {
        const {t} = this.props;

        return (
            <div className="component">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
	                <label>
		            	username <input type="text" name="username" value={this.state.usernam} onChange={this.handleUsernameChange}/>
		            </label>
		            <label>
		            	password <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
		            </label>
		            <label>
		            	password repeat <input type="password" name="password_rep" value={this.state.password_repeat} onChange={this.handlePasswordRepeatChange}/>
		            </label>
		            <input type="submit" value="Submit"/>
                </form>

                <hr/>
                Name: {t('applicationName')}
            </div>
        );
    }
}

export default translate()(Register);