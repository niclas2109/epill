import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";

class DrugList extends React.Component {
    constructor(props) {
        super();
        this.state = {
        	drugs: []
        }
    }

    // This function is called before render() to initialize its state.
    componentWillMount() {
        axios.get('/drug/all')
            .then(({data}) => {
                this.setState({
                    drugs: data.value
                });
            });
    }


    deletePost(id) {
        // ES6 string interpolation (https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings)
        // No error handling for now, e.g. if the user is not authenticated.
        axios.delete(`/drugs/delete/${id}`)
            .then((data) => {
                // Remove post from list of posts.
                const posts = this.state.posts.filter(e => e.id != id);
                this.setState({
                    drugs: drugs
                })
            });
    }


    renderPosts() {
        return this.state.drugs.map((drug => {
            return (
               <li className="col-sm-12 col-md-12 col-lg-12" key={drug.id}>
        		<div className="image-container col-sm-2 col-md-2 col-lg-2">
        			image
        		</div>

        		<div className="info col-sm-9 col-md-9 col-lg-9">
        			<h4>
        				{ drug.name }
        			</h4>
        			<p className="drug-features">
        			</p>
        			<p>
        				Verwendet bei
        			</p>
        			<p>
        				Wirkstoff(e):
        			</p>
        		</div>
        		<div className="action-pattern col-sm-1 col-md-1 col-lg-1">
        			<ul>
        				<li>
        					<button type="button" className="btn btn-xs btn-like">
        						<span className="glyphicon glyphicon-heart"></span>
        					</button>
        				</li>
        				<li>
        					<button type="button" className="btn btn-xs btn-add">
        						<span className="glyphicon glyphicon-plus"></span>
        					</button>
        				</li>
        				<li>
        					<button type="button" className="btn btn-xs btn-open">
        						<span className="glyphicon glyphicon-eye-open"></span>
        					</button>
        				</li>
        			</ul>
        		</div>
        	</li>
            );
        }));
    }


    render() {
        return (
        	<div className="container no-banner">
                <h1>Medikamente</h1>
                <div>
                	Hier findest du eine Übersicht...
                </div>
                <div className="row">
	                <ul className="drug-list">
	                    {this.renderPosts()}
	                </ul>
                </div>
            </div>
        );
    }
}


export default DrugList;