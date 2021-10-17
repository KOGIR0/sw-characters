export interface AppProps {
    setCurrentPage: (n: Number) => void,
    fetchCharacters: (n: Number) => void
}

export interface AppState {
    isSortedByName: boolean,
    ascending: boolean
}