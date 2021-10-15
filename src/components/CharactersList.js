import React from 'react';


class CharactersList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/people/?page=1")
        .then(data => {
            return data.json();
        })
        .then(data => {
            const results = data.results;
            this.setState({
                characters: results
            })
            console.log(this.state.characters);
        })
        .catch(e => {
            console.log("Error getting data", e);
        })
    }

    render() {
        return (<div>
            {this.state.characters ?
            this.state.characters.map((ch, i) => {
                return <div key={i}>{JSON.stringify(ch)}</div>
            }) : null}
        </div>);
    }
}

export default CharactersList;