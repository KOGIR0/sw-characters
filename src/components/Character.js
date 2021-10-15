import React from 'react';
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
                    <div>Name: {this.props.info.name ? this.props.info.name : "No name provided"}</div>
                    <div>Height: {this.props.info.height ? this.props.info.height : "No height provided"}</div>
                    <div>Mass: {this.props.info.mass ? this.props.info.mass : "No mass provided"}</div>
                </div>
            )
        } else {
            <div>No info provided</div>
        }
    }
}

export default Character;