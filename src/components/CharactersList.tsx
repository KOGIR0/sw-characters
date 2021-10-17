import React from 'react';
import Character from './Character';
import '../styles/CharacterList.css';
import { CharactersListProps } from '../types/CharacterList';

class CharactersList extends React.Component<CharactersListProps>
{
    render() {
        const { characters, favorites } = this.props;
        if(characters) {
            if(favorites) {
                return (<div className="character-list">
                    { characters.map((ch, i) => {
                        let favorite = favorites.find(f => f.name === ch.name);
                        return <Character info={ch} key={i} isFavorite={favorite ? true : false}/>
                    }) }
                </div>);
            }
        } else if(favorites) {
            return (<div className="character-list">
                { favorites.map((ch, i) => {
                    return <Character info={ch} key={i} isFavorite={true} />
                })}
            </div>);
        }
    }
}

export default CharactersList;