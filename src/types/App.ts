export type AppProps = {
    setCurrentPage: (n: Number) => void,
    fetchCharacters: (n: Number) => void,
    favorites: Array<any>,
    characters: Array<any>,
    currentPage: number,
    pagesNum: number
}

export type AppState = {
    isSortedByName: boolean,
    ascending: boolean
}