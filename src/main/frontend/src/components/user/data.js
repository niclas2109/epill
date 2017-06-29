import axios from "axios";
import React from "react";

import {Link} from "react-router-dom";

import {translate} from "react-i18next";

import User from "./../../util/User";

// See https://facebook.github.io/react/docs/forms.html for documentation about forms.
class UserData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	firstname	: '',
        	lastname	: ''
        };
        
        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
    }


    componentWillMount() {
    	if(!User.isAuthenticated())
    		return;
    	
        axios.get(`/user/${User.id}`)
            .then(({data}) => {
                this.setState({
                    firstname	: data.value.firstname,
                    lastname	: data.value.lastname,
                });
            });
    }
    
    
    handleFirstnameChange(event) {
    	var s = this.state;
    	s.firstname = event.target.value;
    	this.setState(s);
    }

    handleLastnameChange(event) {
    	var s = this.state;
    	s.lastname = event.target.value;
    	this.setState(s);
    }
    
    
    
    
    handleSubmit(event) {
        event.preventDefault();
        
        axios.post('/user/update',
               {
                	firstname	: this.state.firstname,
                	lastname	: this.state.lastname
                })
                .then((data) => {
                	console.log(data);
                });
    }
    
    render() {
        const {t} = this.props;

        return (
        	<div className="container marketing no-banner">
        		<div className='page-header'>
        	        <h3>{t("userData")}</h3>
        	    </div>
     	
        	    <p className="justify">
	    			{t("userCockpitDescr")}
	    		</p>
        	    
        	    <form onSubmit={this.handleSubmit}>
	        		<fieldset>
		        	    <div className="form-group col-lg-4 col-md-4">
			                <label htmlFor="firstname">{t('firstname')}</label>
			                <input type="text" name="firstname" id="firstname" className="form-control" value={this.state.firstname} onChange={this.handleFirstnameChange} />
			            </div>
			            
			            <div className="form-group col-lg-4 col-md-4">
			               <label htmlFor="lastname">{t('lastname')}</label>
			               <input type="text" name="lastname" id="lastname" className="form-control" value={this.state.lastname} onChange={this.handleLastnameChange} />
			            </div> 
					</fieldset>
					
			        <fieldset>   	
				        <div className="form-group col-lg-4 col-md-4">
					       <button type="submit" className="btn btn-primary">{t('save')}</button>
					       <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="></img>
					    </div>

					</fieldset>
        	    </form>
        	</div>
        );
    }
}

export default translate()(UserData);