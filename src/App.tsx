import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, setCurrentPage } from './actions/charactersActions';
import { Route, Switch, NavLink } from 'react-router-dom';
import { AppProps } from './types/App';
import FavoritesPage from './components/FavoritesPage';
import AllCharactersPage from './components/AllCharactersPage';

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.fetchCharacters(1);
    }

    render() {
        return ( 
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
                        <AllCharactersPage />
                    </Route>
                    <Route exact path="/favorites">
                        <FavoritesPage />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default connect(null ,{fetchCharacters, setCurrentPage})(App);