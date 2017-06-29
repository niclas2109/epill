import React from "react";
import User from "./User";

import {Link} from "react-router-dom";

class UserMenue extends React.Component {
	  constructor(props) {
	    super(props);

	  }

	  render() {
		  let menue = null;
		  if(User.isAuthenticated()) {
				menue = <ul className="nav navbar-nav navbar-right">
						<li className="dropdown open">
						<Link to="/user" className="dropdown-toggle">
							{User.firstname} {User.lastname}
						</Link>
						<ul className="dropdown-menu">
							<li><Link to="/like">my drugs</Link></li>
							<li><Link to="/compare">compare drugs</Link></li>
							<li><Link to="/user/1/settings/de/">settings</Link></li>
							<li><Link to="/user/1/de/">user data</Link></li>
							<li><Link to="/user/all/de/">users</Link></li>
							<li><a href="#">logout</a></li>
						</ul></li>
				</ul>;
				
		  } else {
			  menue = <ul className="nav navbar-nav navbar-right">
					<li className="dropdown open">
					<Link to="#" className="dropdown-toggle">
						login/register
					</Link>
					<ul className="dropdown-menu">
						<li><Link to="/user/login">login</Link></li>
						<li><Link to="/user/register">register</Link></li>
					</ul></li>
				</ul>;
		  }
		
	    return (
	    	menue
	    );
	  }
	}

export default UserMenue;