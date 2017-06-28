import axios from "axios";
import React from "react";

import User from "../util/User";

class DrugDetail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            drug: undefined
        }

    }

    componentWillMount() {
        axios.get(`/drug/${this.props.match.params.id}/de`)
            .then(({data}) => {
                this.setState({
                    drug: data.value
                });
            });
    }

    render() {
        const drug = this.state.drug;
        if (!drug) {
            // Do not show anything while loading.
            return <div></div>;
        }

        return (
            <div className="component">
                <h1>Drug Detail</h1>
                <div>Title {drug.name}</div>
                { User.isAuthenticated() &&
                Eingeloggt
                }
            </div>
        );
    }
}

export default DrugDetail;