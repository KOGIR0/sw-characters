import React from 'react';
import Character from './Character';
import './Pagination.css';
import { fetchCharacters } from '../actions/charactersActions';
import { connect } from 'react-redux';

class Pagination extends React.Component
{
    createPages(pagesNum) {
        console.log(this.props.currentPage);
        const pages = [...Array(this.props.pagesNum).keys()];
        return pages.map(i => {
            return (<button style={(i + 1) === this.props.currentPage ? {backgroundColor: "orange"} : null}
                key={i}
                onClick={() => this.props.fetchCharacters(i + 1)}>
                    {i + 1}
                </button>);
        })
    }

    render() {
    return (<div id="pages">
        {this.createPages(this.props.pagesNum)}
    </div>);
    }
}

const mapStateToProps = state => ({
    pagesNum: state.characters.pagesNum,
    currentPage: state.characters.currentPage
})

export default connect(mapStateToProps, { fetchCharacters })(Pagination);