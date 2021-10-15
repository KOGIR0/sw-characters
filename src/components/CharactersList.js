import React from 'react';
import Character from './Character';
import './CharacterList.css';

class CharactersList extends React.Component
{
    render() {
        return (<div className="character-list">
            {this.props.characters ?
            this.props.characters.map((ch, i) => {
                return <Character info={ch} key={i}/>
            }) : null}
        </div>);
    }
}

export default CharactersList;