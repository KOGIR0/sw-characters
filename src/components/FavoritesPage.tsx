import React from 'react';
import CharactersList from './CharactersList';
import Pagination from './Pagination';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { CombinedReducersType } from '../types/combinedReducer';
import { setCurrentPage } from '../actions/charactersActions';
import { connect } from 'react-redux';
import { FavoritesPageProps, FavoritesPageState } from '../types/FavoritesPage';

class FavoritesPage extends React.Component<FavoritesPageProps, FavoritesPageState> {
    constructor(props: FavoritesPageProps) {
        super(props);
        this.state = {
            isSortedByName: false,
            ascending: true
        }

        this.sortFavorites = this.sortFavorites.bind(this);
    }

    static defaultProps = {
        favorites: [],
        currentPage: 1,
        setCurrentPage: (n: Number) => {}
    }

    sortFavorites() {
        let favorites = this.props.favorites;
        if(this.state.isSortedByName) {
            if (this.state.ascending) {
                favorites = favorites.sort((a, b) => {
                    return a.name > b.name ? 1 : -1;
                })
            } else {
                favorites = favorites.sort((a, b) => {
                    return a.name < b.name ? 1 : -1;
                })
            }
        }
        return favorites;
    }

    render() {
        const {currentPage} = this.props;
        let favorites = this.sortFavorites();
        const favoritesPagesNum = favorites.length % 10 === 0 ? 
                            favorites.length / 10 : 
                            Math.floor(favorites.length / 10) + 1;
        return (
        <div>
            <div className="sort-options">
                <div>Sort:</div>
                <div onClick={() => {this.setState({
                    ...this.state,
                    isSortedByName: true,
                    ascending: !this.state.ascending
                })}}>
                    Name
                    {this.state.ascending ? <FaArrowUp /> : <FaArrowDown />}
                </div>
            </div>
            <CharactersList
            characters={null}
            favorites={favorites.slice((currentPage - 1)*10, currentPage*10)}
            />
            <Pagination 
            pagesNum={favoritesPagesNum} 
            currentPage={currentPage} 
            onPageClick={this.props.setCurrentPage}
            />
        </div>)
    }
}

const mapStateToProps = (state: CombinedReducersType) => ({
    favorites: state.characters.favorites,
    currentPage: state.characters.currentPage
});

export default connect(mapStateToProps, {setCurrentPage}) (FavoritesPage);