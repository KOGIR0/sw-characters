import React from 'react';
import { addToFavorites, removeFromFavorites } from '../actions/charactersActions';
import { connect } from 'react-redux';
import './Character.css';

class Character extends React.Component
{
    render() {
        const { info, isFavorite } = this.props;
        if(info) {
            return (
                <div className="character" style={isFavorite ? {backgroundColor: "orange"} : null}>
                    <h2>{info.name ? info.name : "No name provided"}</h2>
                    <div>Height: {info.height ? info.height : "No height provided"}</div>
                    <div>Mass: {info.mass ? info.mass : "No mass provided"}</div>
                    <div>Birth Year: {info.birth_year ? info.birth_year : "No birth year provided"}</div>
                    <div>Eye Color: {info.eye_color ? info.eye_color : "No eye color provided"}</div>
                    <div>Gender: {info.gender ? info.gender : "No gender provided"}</div>
                    {!isFavorite ?
                    <button onClick={() => this.props.addToFavorites(info)}>To favorites</button>
                    :
                    <button onClick={() => this.props.removeFromFavorites(info)}>From favorites</button>}
                </div>
            )
        } else {
            <div>No info provided</div>
        }
    }
}

export default connect(null, { addToFavorites, removeFromFavorites })(Character);