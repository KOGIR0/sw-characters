import { FetchCharactersSuccessType } from "../types/charactersActionsTypes";

export type CharactersReducerStateType = {
    characters: any,
    favorites: any,
    pagesNum: number,
    currentPage: number
}

export type ActionType = {
    type: String,
    payload: Number | FetchCharactersSuccessType
}