import React from 'react';
import Character from './Character';
import './CharacterList.css';
import { connect } from 'react-redux';

class CharactersList extends React.Component
{
    render() {
        const { characters, favorites } = this.props;
        return (<div className="character-list">
            {characters ?
            characters.map((ch, i) => {
                let favorite = favorites.find(f => f.name === ch.name);
                return <Character info={ch} key={i} isFavorite={favorite ? true : false}/>
            }) : null}
        </div>);
    }
}

const mapStateToProps = state => ({
    characters: state.characters.characters,
    favorites: state.characters.favorites
})

export default connect(mapStateToProps, null)(CharactersList);