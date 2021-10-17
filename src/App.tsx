import './App.css';
import CharactersList from './components/CharactersList';
import React from 'react';
import Pagination from './components/Pagination';
import { connect } from 'react-redux';
import { fetchCharacters, setCurrentPage } from './actions/charactersActions';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { AllReducersType } from './reducers';

type AppProps = {
    setCurrentPage: (n: Number) => void,
    fetchCharacters: (n: Number) => void,
    favorites: Array<any>,
    characters: Array<any>,
    currentPage: number,
    pagesNum: number
}

type AppState = {
    isSortedByName: boolean,
    ascending: boolean
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            isSortedByName: false,
            ascending: true
        }

        this.sortFavorites = this.sortFavorites.bind(this);
    }

    componentDidMount() {
        this.props.fetchCharacters(1);
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
        const {characters, currentPage, pagesNum} = this.props;
        let favorites = this.sortFavorites();
        const favoritesPagesNum = favorites.length % 10 === 0 ? favorites.length / 10 : Math.floor(favorites.length / 10) + 1;
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1>Star Wars Characters</h1>
                        <Switch>
                            <Route exact path="/">
                                <NavLink 
                                className="nav-link"
                                to="/favorites" 
                                onClick={() => this.props.setCurrentPage(1)}>
                                    Show favorites
                                </NavLink>
                            </Route>
                            <Route exact path="/favorites">
                                <NavLink 
                                className="nav-link"
                                to="/"
                                onClick={() => this.props.setCurrentPage(1)}>
                                    Show all
                                </NavLink>
                            </Route>
                        </Switch>
                    </header>
                    <Switch>
                        <Route exact path="/">
                            <CharactersList 
                            characters={characters} 
                            favorites={favorites}
                            />
                            <Pagination
                            pagesNum={pagesNum} 
                            currentPage={currentPage} 
                            onPageClick={this.props.fetchCharacters}
                            />
                        </Route>
                        <Route exact path="/favorites">
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
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state: AllReducersType) => ({
    characters: state.characters.characters,
    favorites: state.characters.favorites,
    currentPage: state.characters.currentPage,
    pagesNum: state.characters.pagesNum
});

export default connect(mapStateToProps, {fetchCharacters, setCurrentPage})(App);