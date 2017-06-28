import axios from "axios";
import React from "react";
import {withCookies} from "react-cookie";

import User from "../util/User";

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: undefined
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.cookies = this.props.cookies;
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }


    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }


    handleSubmit(event) {
        event.preventDefault();
        
        console.log(this.state);
        
        axios.post('/auth/login', this.state, {
            // We allow a status code of 401 (unauthorized). Otherwise it is interpreted as an error and we can't
            // check the HTTP status code.
            validateStatus: (status) => {
                return (status >= 200 && status < 300) || status == 401
            }
        })
            .then(({data, status}) => {
                switch (status) {
                    case 200:
                        User.setCookieCredentials(data);
                        this.setState({error: undefined});

                        // Store authentication values even after refresh.
                        this.cookies.set('auth', {
                            token: data.token,
                            user: User
                        }, {path: '/'});

                        // Redirect to front page.
                        this.props.history.push("/");
                        break;

                    case 401:
                        this.setState({error: true});
                        break;
                }
            });
    }

    handleLogout() {
        axios.defaults.headers.common['Authorization'] = undefined;
        User.reset();
        this.cookies.remove('auth');
        this.forceUpdate();
    }


    render() {
        let component = null;
        if (User.isNotAuthenticated()) {
            component =
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" value={this.state.password}
                               onChange={this.handlePasswordChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
        } else {
            component =
                <span onClick={this.handleLogout}>Logout</span>
        }

        return (
            <div className="component">
                <h1>Authentication</h1>
                Current user: {User.username || 'not logged in'}

                <p/>
                {component}

                <p/>
                { this.state.error &&
                <div className="error">
                    Login was not successful.
                </div>
                }
            </div>
        );
    }
}


export default withCookies(Authentication);