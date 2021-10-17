import React from 'react';
import './Pagination.css';
import { PaginationProps } from '../types/PaginationTypes';

class Pagination extends React.Component<PaginationProps>
{
    createPages(pagesNum: Number) {
        const currentPage = this.props.currentPage;
        const pages = [...Array(pagesNum).keys()];
        return pages.map(i => {
            return (<button style={(i + 1) === currentPage ? {backgroundColor: "orange"} : undefined}
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