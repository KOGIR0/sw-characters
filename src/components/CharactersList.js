import React from 'react';
import Character from './Character';
import './CharacterList.css';

class CharactersList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/people/?page=1")
        .then(data => {
            return data.json();
        })
        .then(data => {
            const results = data.results;
            this.setState({
                characters: results
            })
            console.log(this.state.characters);
        })
        .catch(e => {
            console.log("Error getting data", e);
        })
    }

    render() {
        return (<div className="character-list">
            {this.state.characters ?
            this.state.characters.map((ch, i) => {
                return <Character info={ch} key={i}/>
            }) : null}
        </div>);
    }
}

export default CharactersList;