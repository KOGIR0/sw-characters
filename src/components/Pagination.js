import React from 'react';
import './Pagination.css';

class Pagination extends React.Component
{
    createPages(pagesNum) {
        const currentPage = this.props.currentPage;
        const pages = [...Array(pagesNum).keys()];
        return pages.map(i => {
            return (<button style={(i + 1) === currentPage ? {backgroundColor: "orange"} : null}
                key={i}
                onClick={() => this.props.onPageClick(i + 1)}>
                    {i + 1}
                </button>);
        })
    }

    render() {
        const pagesNum = this.props.pagesNum;
        return (<div id="pages">
            {this.createPages(pagesNum)}
        </div>);
    }
}

export default Pagination;