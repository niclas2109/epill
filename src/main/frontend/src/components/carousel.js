import axios from "axios";
import React from "react";

import User from "../util/User";

class Carousel extends React.Component {
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
        		<div className="carousel-inner" role="listbox">
        			<div className="item active">
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
        	</div>
        );
    }
}

export default Carousel;