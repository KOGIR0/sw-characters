import React from 'react';
import Character from './Character';
import './CharacterList.css';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/charactersActions';

class CharactersList extends React.Component
{
    render() {
        const { characters } = this.props.characters;
        console.log(characters);
        return (<div className="character-list">
            {characters ?
            characters.map((ch, i) => {
                return <Character info={ch} key={i}/>
            }) : null}
        </div>);
    }
}

const mapStateToProps = state => ({
    characters: state.characters
})

export default connect(mapStateToProps, null)(CharactersList);