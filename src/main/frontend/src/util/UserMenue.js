import React from "react";
import User from "./User";

import {Link} from "react-router-dom";
import {translate} from "react-i18next";

class UserMenue extends React.Component {
	  constructor(props) {
	    super(props);

	  }

	  render() {
	      const {t} = this.props;

		  let menue = null;
		  if(User.isAuthenticated()) {
				menue = <ul className="nav navbar-nav navbar-right">
						<li className="dropdown open">
						<Link to="/user" className="dropdown-toggle">
							{User.firstname} {User.lastname}
						</Link>
						<ul className="dropdown-menu">
							<li><Link to="/like">{t('userDrugs')}</Link></li>
							<li><Link to="/compare">{t('rememberedDrugs')}</Link></li>
							<li><Link to="/user/settings">{t('userSettings')}</Link></li>
							<li><Link to="/user/data">{t('userData')}</Link></li>
							<li><Link to="/user/list">{t('userList')}</Link></li>
							<li><a href="#">{t('logout')}</a></li>
						</ul></li>
				</ul>;
				
		  } else {
			  menue = <ul className="nav navbar-nav navbar-right">
					<li className="dropdown open">
					<Link to="#" className="dropdown-toggle">
						{t('login')}/{t('register')}
					</Link>
					<ul className="dropdown-menu">
						<li><Link to="/user/login">{t('login')}</Link></li>
						<li><Link to="/user/register">{t('register')}</Link></li>
					</ul></li>
				</ul>;
		  }
		
	    return (
	    	menue
	    );
	  }
	}

export default translate()(UserMenue);