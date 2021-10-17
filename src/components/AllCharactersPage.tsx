import React from 'react';
import CharactersList from './CharactersList';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/charactersActions';
import { CombinedReducersType } from '../types/combinedReducer';
import { AllCharactersPageProps } from '../types/AllCharactersPage';

class AllCharactersPage extends React.Component<AllCharactersPageProps, {}> {
    static defaultProps = {
        isLoading: true,
        characters: [],
        favorites: [],
        currentPage: 1,
        pagesNum: 0,
        fetchCharacters: (n: Number) => {}
    }

    render() {
        const {characters, currentPage, favorites, pagesNum} = this.props;
        return (
        <div>
            {this.props.isLoading ? <h1>...Loading</h1> :
            <CharactersList 
            characters={characters} 
            favorites={favorites}
            />
            }
            <Pagination
            pagesNum={pagesNum} 
            currentPage={currentPage} 
            onPageClick={this.props.fetchCharacters}
            />
        </div>)
    }
}

const mapStateToProps = (state: CombinedReducersType) => ({
    pagesNum: state.characters.pagesNum,
    currentPage: state.characters.currentPage,
    isLoading: state.characters.isLoading,
    characters: state.characters.characters,
    favorites: state.characters.favorites
})

export default connect(mapStateToProps, { fetchCharacters })(AllCharactersPage);