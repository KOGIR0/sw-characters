import './App.css';
import CharactersList from './components/CharactersList';
import React from 'react';
import Pagination from './components/Pagination';
import { connect } from 'react-redux';
import { fetchCharacters } from './actions/charactersActions';
class App extends React.Component {

    componentDidMount() {
        console.log("Mount");
        this.props.fetchCharacters(1);
    }

    render() {
        return (
        <div className="App">
            <header className="App-header">
                <h1>Star Wars Characters</h1>
            </header>
            <CharactersList />
            <Pagination />
        </div>
        );
    }
}

export default connect(null, {fetchCharacters})(App);
