import './App.css';
import CharactersList from './components/CharactersList';
import React from 'react';
import Pagination from './components/Pagination';
import { connect } from 'react-redux';
import { fetchCharacters, setCurrentPage } from './actions/charactersActions';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
class App extends React.Component {
    componentDidMount() {
        console.log("Mount");
        this.props.fetchCharacters(1);
    }

    render() {
        const {characters, favorites, currentPage, pagesNum} = this.props;
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1>Star Wars Characters</h1>
                        <Switch>
                            <Route exact path="/">
                                <Link 
                                to="/favorites" 
                                onClick={() => this.props.setCurrentPage(1)}>
                                    Show favorites
                                </Link>
                            </Route>
                            <Route exact path="/favorites">
                                <Link to="/">Show all</Link>
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
                            <CharactersList 
                            characters={null} 
                            favorites={favorites.slice((currentPage - 1)*10, currentPage*10)}
                            />
                            <Pagination 
                            pagesNum={Math.floor(favorites.length / 10) + 1} 
                            currentPage={currentPage} 
                            onPageClick={this.props.setCurrentPage}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    characters: state.characters.characters,
    favorites: state.characters.favorites,
    currentPage: state.characters.currentPage,
    pagesNum: state.characters.pagesNum
});

export default connect(mapStateToProps, {fetchCharacters, setCurrentPage})(App);