import axios from "axios";
import React from "react";

import User from "../util/User";

class Start extends React.Component {
    constructor(props) {
        super();
        this.state = {
            drug: undefined
        }

    }

    componentWillMount() {

    }

    render() {
        return (
        		<div id="landing-page-carousel" className="carousel slide">
      
        		<ol className="carousel-indicators">
        			<li data-target="#landing-page-carousel" className="active"></li>
        			<li data-target="#landing-page-carousel" className=""></li>
        			<li data-target="#landing-page-carousel" className=""></li>
        		</ol>
        		<div className="carousel-inner" role="listbox">
        			<div className="item">
        				<img className="first-slide" src="/assets/images/header1.png" alt="First slide"></img>
        				<div className="container">
        					<div className="carousel-caption">
        						<h1>ad,</h1>
        						<p>sdfs</p>
        						<div className="rating-wrapper center-block">
        							<input id='rating_5' name='rating' value='5' type='radio' />
        							<label className='full' htmlFor='rating_5' title=''></label>
        							<input id='rating_4' name='rating' value='4' type='radio' />
        							<label className='full' htmlFor='rating_4' title=''></label>
        							<input id='rating_3' name='rating' value='3' type='radio' />
        							<label className='full' htmlFor='rating_3' title=''></label>
        							<input id='rating_2' name='rating' value='2' type='radio' />
        							<label className='full' htmlFor='rating_2' title=''></label>
        							<input id='rating_1' name='rating' value='1' type='radio' />
        							<label className='full' htmlFor='rating_1' title=''></label>
        							<div className='clearit'></div>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>

        	<div className="container marketing">
        		<div className="row">
        			<div className="col-lg-4">
        				<img className="img-circle" src="/assets/images/logo_s.svg"
        					alt="Generic placeholder image" width="140" height="140" />
        				<h2>ePill</h2>
        				<p>Donec sed odio dui. Etiam porta sem malesuada magna mollis
        					euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
        					Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        					Praesent commodo cursus magna.</p>
        				<p>
        					<a className="btn btn-default" href="/about" role="button"
        						target="blank">View details »</a>
        				</p>
        			</div>
        			<div className="col-lg-4">
        				<img className="img-circle"
        					src="/assets/images/prof_sunyaev.jpg"
        					alt="Generic placeholder image" width="140" height="140" />
        				<h2>team</h2>
        				<p>Duis mollis, est non commodo luctus, nisi erat porttitor
        					ligula, eget lacinia odio sem nec elit. Cras mattis consectetur
        					purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
        					tortor mauris condimentum nibh.</p>
        				<p>
        					<a className="btn btn-default"
        						href="https://www.uni-kassel.de/fb07/institute/ibwl/personen-fachgebiete/sunyaev-prof-dr/team.html"
        						role="button" target="blank">View details »</a>
        				</p>
        			</div>

        			<div className="col-lg-4">
        				<img className="img-circle"
        					src="/assets/images/articles.jpg"
        					alt="Generic placeholder image" width="140" height="140" />
        				<h2>articles</h2>
        				<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
        					egestas eget quam. Vestibulum id ligula porta felis euismod semper.
        					Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
        					nibh, ut fermentum massa justo sit amet risus.</p>
        				<p>
        					<a className="btn btn-default"
        						href="https://www.uni-kassel.de/fb07/institute/ibwl/personen-fachgebiete/sunyaev-prof-dr/research.html"
        						role="button" target="blank">View details »</a>
        				</p>
        			</div>
            		</div>
            		</div>
            		</div>
        );
    }
}

export default Start;