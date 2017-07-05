import axios from "axios";
import React from "react";
import Moment from 'moment';

import {Link} from "react-router-dom";

import { toast } from 'react-toastify';
import {translate} from "react-i18next";

import User from "./../../util/User";

// See https://facebook.github.io/react/docs/forms.html for documentation about
// forms.
class UserData extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
	        	firstname	: '',
	        	lastname		: '',
	        	dateOfBirth	: '',
	        	gender		: {id : 0},
	        	email		: '',
	        	sending		: false,
	        	levelOfDetail		: 1,
	        	preferredFontSize	: 12
        };
        
        this.handleFirstnameChange		= this.handleFirstnameChange.bind(this);
        this.handleLastnameChange		= this.handleLastnameChange.bind(this);
        this.handleGenderChange			= this.handleGenderChange.bind(this);

        this.handleDateOfBirthChange		= this.handleDateOfBirthChange.bind(this);
        
        this.handleEmailChange			= this.handleEmailChange.bind(this);

        this.handleChangeLevelOfDetail		= this.handleChangeLevelOfDetail.bind(this);
        this.handleChangePreferredFontSize	= this.handleChangePreferredFontSize.bind(this);
        
        this.handleSubmit				= this.handleSubmit.bind(this);
    }


    componentWillMount() {
    		if(!User.isAuthenticated())
    			return;

    		axios.get(`/user/${User.id}`)
            .then(({data, status}) => {
            		this.state.firstname		= data.value.firstname,
            		this.state.lastname		= data.value.lastname,
            		this.state.email			= data.value.email			|| '',
            		this.state.dateOfBirth	= data.value.dateOfBirth		|| '',
            		this.state.gender		= data.value.gender			|| {id : 0},
            		this.state.username		= data.value.username,
            		this.state.levelOfDetail	= data.value.levelOfDetail	|| 0,
            		this.state.preferredFontSize	= data.value.preferredFontSize

                this.setState(this.state);
            });
    }
    
    
    handleFirstnameChange(event) {
	    this.state.firstname	= event.target.value;
	    	this.setState(this.state);
    }

    handleLastnameChange(event) {
	    this.state.lastname = event.target.value;
	    	this.setState(this.state);
    }
    
    handleGenderChange(event) {
	    this.state.gender = {id : event.target.value };
	    this.setState(this.state);
    }
    
    handleDateOfBirthChange(event) {
	    this.state.dateOfBirth = event.target.value
	    	this.setState(this.state);
    }
    
    handleUsernameChange(event) {
	    this.state.username = event.target.value;
	    	this.setState(this.state);
    }
    
    handleChangeLevelOfDetail(event) {
	    this.state.levelOfDetail = event.target.value;
	    	this.setState(this.state);
	    	
	    User.setLevelOfDetail(this.state.levelOfDetail);
    }
    
    handleChangePreferredFontSize(event) {
	    this.state.preferredFontSize = event.target.value;
	    	this.setState(this.state);

		User.setPreferredFontSize(this.state.preferredFontSize);
		this.props.updateFontSize(this.state.preferredFontSize);
    }
    
    handleEmailChange(event) {
	    this.state.email = event.target.value;
    		this.setState(this.state);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        if(this.state.sending)
        		return;

		const {t} = this.props;
	    const options = {
	    	    position: toast.POSITION.BOTTOM_CENTER
	    };
        
        
        var date = Moment(this.state.dateOfBirth);
        
        if(!date.isValid()) {
	        	if(Moment(this.state.dateOfBirth, "DD.MM.YYYY").isValid()) {
	    			date = Moment(this.state.dateOfBirth, "DD.MM.YYYY");
	    		} else {
	            toast.error(t('invalidDateFormat'), options);
	    			return;
	    		}
        }

        this.state.sending = true;
        this.setState(this.state);
        
        axios.post('/user/update',
               {
	           		firstname			: this.state.firstname,
	           		lastname				: this.state.lastname,
	                	dateOfBirth			: date.format("YYYY-MM-DD"),
	        			gender				: this.state.gender,
	        			email				: this.state.email,
    	        			levelOfDetail		: this.state.levelOfDetail,
	    	        		preferredFontSize	: this.state.preferredFontSize
                })
                .then(({data, status}) => {
                     this.state.sending = false;
                     this.setState(this.state);
                     
                     const {t} = this.props;
                     const options = {
                     	    position: toast.POSITION.BOTTOM_CENTER
                     };
                     
                     switch (status) {
                         case 200:
                             toast.success(t('savingSuccessfull'), options);
                             break;
                         case 400:
                          	toast.error(t('savingFailed'), options);
                             break;
                         case 401:
                         	console.log(data, "not permitted");
                            	break;
                     }
                });
    }
    
    render() {
        const {t} 		= this.props;
        const firstname 	= User.firstname;
        const lastname 	= User.lastname;

        return (
	       <div className="container marketing no-banner">
	        	<div className='page-header'>
	        	      <h3>{t("userData")}</h3>
	        	</div>
	     	
	        	{User.levelOfDetail >= 1 &&
			    <div className="text-box">
	        			{t("userCockpitDescr").replace("%User.firstname%", firstname).replace("%User.lastname%", lastname)}
				</div>
		    } 
	        	   <form onSubmit={this.handleSubmit}>
		        		<fieldset>
			                <div className="form-group col-md-4 col-lg-4">
			                   <label htmlFor="gender">{t('gender')}</label>
			                   <select id="gender" value="0" name="gender" className="form-control" title={t('gender')} value={this.state.gender.id} onChange={this.handleGenderChange}>
	                        			<option value="0" disabled>{t('noInfo')}</option>
			                         <option value="2">{t('female')}</option>
			                         <option value="1">{t('male')}</option>
			                    </select>
			               </div>
				            <div className="form-group col-md-4 col-lg-4">
				               <label htmlFor="firstname">{t('firstname')}</label>
				               <input type="text" name="firstname" id="firstname" className="form-control" value={this.state.firstname} onChange={this.handleFirstnameChange} />
				            </div> 
				            <div className="form-group col-md-4 col-lg-4">
				               <label htmlFor="lastname">{t('lastname')}</label>
				               <input type="text" name="lastname" id="lastname" className="form-control" value={this.state.lastname} onChange={this.handleLastnameChange} />
				            </div> 
					</fieldset>
						
		        		<fieldset>
				          <div className="form-group col-lg-5 col-md-5">
				             <label htmlFor="dateOfBirth">{t('dateOfBirth')}</label>
				             <input type="text" name="dateOfBirth" id="dateOfBirth" className="form-control" value={this.state.dateOfBirth} onChange={this.handleDateOfBirthChange} />
				          </div> 
					      <div className="form-group col-lg-5 col-md-5">
					         <label htmlFor="email">{t('email')}</label>
					         <input type="text" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange} />
					      </div> 
					</fieldset>
						
					<fieldset>
						<p><b>{t("levelOfDetail")}</b></p>
						<ul className="list-inline">
							<li className="col-lg-4 col-md-4 col-xs-4 list-group-item">
								<label htmlFor="settings-detail-min" className="radio-inline">
									<input type="radio" value="1" id="settings-detail-min" name="levelOfDetail" checked={this.state.levelOfDetail == 1} onChange={this.handleChangeLevelOfDetail} />
									minimal
									<p>kein Hilfe</p>
								</label>
							</li>
							<li className="col-lg-4 col-md-4 col-xs-4 list-group-item">
								<label htmlFor="settings-detail-default" className="radio-inline">
									<input type="radio" value="3" id="settings-detail-default" name="levelOfDetail" checked={this.state.levelOfDetail == 3} onChange={this.handleChangeLevelOfDetail} />
									standard
									<p>Hilfe</p>
								</label>
							</li>
							<li className="col-lg-4 col-md-4 col-xs-4 list-group-item">
								<label htmlFor="settings-detail-max" className="radio-inline">
									<input type="radio" value="5" id="settings-detail-max" name="levelOfDetail" checked={this.state.levelOfDetail == 5} onChange={this.handleChangeLevelOfDetail} />
									maximal
									<p>Viel Hilfe</p>
								</label>
							</li>
						</ul>
					</fieldset>
					<fieldset>
					<p><b>{t("preferredFontSize")}</b></p>
					<ul className="list-inline">
						<li className="col-lg-4 col-md-4 col-xs-4 list-group-item">
							<label htmlFor="settings-preferred-font-size-min" className="radio-inline">
								<input type="radio" value="minFontSize" id="settings-preferred-font-size-min" name="preferredFontSize" checked={this.state.preferredFontSize == 'minFontSize'} onChange={this.handleChangePreferredFontSize} />
								<span className="small-text">AAA</span>
							</label>
						</li>
						<li className="col-lg-4 col-md-4 col-xs-4 list-group-item">
							<label htmlFor="settings-preferred-font-size-default" className="radio-inline">
								<input type="radio" value="defaultFontSize" id="settings-preferred-font-size-default" name="preferredFontSize" checked={this.state.preferredFontSize == 'defaultFontSize'} onChange={this.handleChangePreferredFontSize} />
								<span className="medium-text">AAA</span>
							</label>
						</li>
						<li className="col-lg-4 col-md-4 col-xs-4 list-group-item">
							<label htmlFor="settings-preferred-font-size-max" className="radio-inline">
								<input type="radio" value="maxFontSize" id="settings-preferred-font-size-max" name="preferredFontSize" checked={this.state.preferredFontSize == 'maxFontSize'} onChange={this.handleChangePreferredFontSize} />
								<span className="big-text">AAA</span>
							</label>
						</li>
					</ul>
				</fieldset>	
						
						<div className="form-actions">
			            {!this.state.sending ?
	            				<button type="submit" className="btn btn-primary">{t('save')}</button>
	            				: <button className="btn btn-default"><img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="></img></button> }
				        </div>
	        	    </form>
	        	</div>
        );
    }
}

export default translate()(UserData);