import logo from './logo.svg';
import './App.css';
import CharactersList from './components/CharactersList';
import React from 'react';
import Pagination from './components/Pagination';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            pagesNum: 0,
            currentPage: 1
        }
    }

    fetchData(page) {
        fetch("https://swapi.dev/api/people/?page=" + page)
        .then(data => {
            return data.json();
        })
        .then(data => {
            const results = data.results;
            const pageNum = Math.floor(data.count / 10) + 1;
            this.setState({
                characters: results,
                pagesNum: pageNum,
                currentPage: page
            })
            console.log(data);
        })
        .catch(e => {
            console.log("Error getting data", e);
        })
    }

    componentDidMount() {
        console.log("Mount");
        this.fetchData(1);
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <h1>Star Wars Characters</h1>
            </header>
            <CharactersList characters={this.state.characters}/>
            <Pagination pagesNum={this.state.pagesNum} onPageClick={this.fetchData.bind(this)}/>
            </div>
        );
    }
}

export default App;
