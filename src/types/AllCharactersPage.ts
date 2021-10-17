
export interface AllCharactersPageProps {
    isLoading: boolean,
    characters: Array<any>,
    favorites: Array<any>,
    currentPage: number,
    pagesNum: number,
    fetchCharacters: (n: Number) => void
}