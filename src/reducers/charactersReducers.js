import { 
    ADD_TO_FAVORITES, 
    FETCH_CHARACTERS_SUCCESS, 
    REMOVE_FROM_FAVORITES, 
    SET_CURRENT_PAGE
} from "../actions/types";

const initialState = {
    characters: [],
    favorites: [],
    pagesNum: 0,
    currentPage: 1
}

const charactersReducers = (state=initialState, action) => {
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
                characters: action.payload.characters,
                pagesNum: action.payload.pagesNum,
                currentPage: action.payload.currentPage
            }
        default:
            return state;
    }
}

export default charactersReducers;