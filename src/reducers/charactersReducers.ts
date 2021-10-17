import { 
    ADD_TO_FAVORITES, 
    FETCH_CHARACTERS_SUCCESS, 
    REMOVE_FROM_FAVORITES, 
    SET_CURRENT_PAGE,
    FETCH_CHARACTERS_STARTED
} from "../actions/actionTypes";
import { CharactersReducerStateType, ActionType } from "../types/CharacterReducers";

const initialState = {
    characters: [],
    favorites: [],
    pagesNum: 0,
    currentPage: 1,
    isLoading: true,
}

const charactersReducers = (state: CharactersReducerStateType = initialState, action: ActionType) => {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case REMOVE_FROM_FAVORITES:
            const index = state.favorites.indexOf(action.payload);
            let favorites = state.favorites;
            if(index > -1) {
                favorites.splice(index, 1);
            }
            return {
                ...state,
                favorites: [...favorites]
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case FETCH_CHARACTERS_STARTED:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}

export default charactersReducers;