import { ADD_TO_FAVORITES, FETCH_CHARACTERS_SUCCESS, REMOVE_FROM_FAVORITES } from "../actions/types";

const initialState = {
    characters: [],
    favorites: [],
    pagesNum: 0,
    currentPage: 1
}

export default function(state=initialState, action) {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            return {
                favorites: [...action.payload, state.favorites]
            }
        case REMOVE_FROM_FAVORITES:
            return state;
        case FETCH_CHARACTERS_SUCCESS:
            console.log(action.payload);
            return {
                characters: action.payload.characters,
                pagesNum: action.payload.pagesNum,
                currentPage: action.payload.currentPage
            }
        default:
            return state;
    }
}