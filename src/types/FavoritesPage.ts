export interface FavoritesPageProps {
    favorites: Array<any>,
    currentPage: number,
    setCurrentPage: (n: Number) => void
}

export interface FavoritesPageState {
    isSortedByName: boolean,
    ascending: boolean
}