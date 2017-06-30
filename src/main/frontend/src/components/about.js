import axios from "axios";
import React from "react";

import {Link} from "react-router-dom";

import {translate} from "react-i18next";

// See https://facebook.github.io/react/docs/forms.html for documentation about forms.
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        		
        };

    }

    render() {
        const {t} = this.props;

        return (
        	<div className="container marketing no-banner">
        		<div className='page-header'>
        	    	<div className='btn-toolbar pull-right'>
        	            <div className='btn-group'></div>
        	        </div>
        	        <h3>{t("about")}</h3>
        	    </div>
        		<div className="row featurette">
        			<div className="col-md-7">
        				<h2 className="featurette-heading">
        					And lastly, this one. <span className="text-muted">Checkmate.</span>
        				</h2>
        				<p className="lead">Donec ullamcorper nulla non metus auctor
        					fringilla. Vestibulum id ligula porta felis euismod semper. Praesent
        					commodo cursus magna, vel scelerisque nisl consectetur. Fusce
        					dapibus, tellus ac cursus commodo.</p>
        			</div>
        			<div className="col-md-5">
        				<img className="featurette-image img-responsive center-block"
        					data-src="holder.js/500x500/auto" alt="500x500"
        					src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzUwMHg1MDAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE1YzA2N2E3MjE2IHRleHQgeyBmaWxsOiNBQUFBQUE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6MjVwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTVjMDY3YTcyMTYiPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRUVFRUVFIi8+PGc+PHRleHQgeD0iMTg0Ljc4OTA2MjUiIHk9IjI2MS4yMzEyNSI+NTAweDUwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
        					data-holder-rendered="true" />
        			</div>
        		</div>
        	</div>
        );
    }
}

export default translate()(About);