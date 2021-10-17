export interface PaginationProps {
    currentPage: Number,
    pagesNum: Number,
    onPageClick: (n: Number) => void,
}