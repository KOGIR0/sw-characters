import React from 'react';
import { addToFavorites } from '../actions/charactersActions';
import { connect } from 'react-redux';
import './Character.css';

class Character extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.info) {
            return (
                <div className="character">
                    <h2>{this.props.info.name ? this.props.info.name : "No name provided"}</h2>
                    <div>Height: {this.props.info.height ? this.props.info.height : "No height provided"}</div>
                    <div>Mass: {this.props.info.mass ? this.props.info.mass : "No mass provided"}</div>
                    <div>Birth Year: {this.props.info.birth_year ? this.props.info.birth_year : "No birth year provided"}</div>
                    <div>Eye Color: {this.props.info.eye_color ? this.props.info.eye_color : "No eye color provided"}</div>
                    <button onClick={() => this.addToFavorites(this.props.info)}>To favorites</button>
                </div>
            )
        } else {
            <div>No info provided</div>
        }
    }
}

export default connect(null, { addToFavorites })(Character);