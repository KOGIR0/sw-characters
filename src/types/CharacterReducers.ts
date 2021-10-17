import { FetchCharactersSuccessType } from "./charactersActions";

export type CharactersReducerStateType = {
    characters: any,
    favorites: any,
    pagesNum: number,
    currentPage: number,
    isLoading: boolean
}

export type ActionType = {
    type: String,
    payload: Number | FetchCharactersSuccessType
}