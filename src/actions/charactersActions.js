import { ADD_TO_FAVORITES,
    FETCH_CHARACTERS_STARTED, 
    FETCH_CHARACTERS_FAILURE, 
    FETCH_CHARACTERS_SUCCESS, 
    REMOVE_FROM_FAVORITES} from "./types";

export const addToFavorites = character => {
    return {
        type: ADD_TO_FAVORITES,
        payload: character
    };
}

export const removeFromFavorites = character => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: character,
    }
}

const fetchCharactersStarted = () => {
    return {
        type: FETCH_CHARACTERS_STARTED
    };
}

const fetchCharactersSuccess = ({characters, pagesNum, currentPage}) => {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: {
            characters: characters,
            pagesNum: pagesNum,
            currentPage: currentPage
        }
    }
}

const fetchCharactersFailure = () => {
    return {
        type: FETCH_CHARACTERS_FAILURE
    }
}

export const fetchCharacters = page => {
    return dispatch => {
        dispatch(fetchCharactersStarted());

        fetch("https://swapi.dev/api/people/?page=" + page)
        .then(data => {
            return data.json();
        })
        .then(data => {
            const results = data.results;
            const pagesNum = Math.floor(data.count / 10) + 1;
            dispatch(fetchCharactersSuccess({
                characters: results,
                pagesNum: pagesNum,
                currentPage: page
            }))
        })
        .catch(e => {
            console.log("Error getting data", e);
            dispatch(fetchCharactersFailure());
        })
    }
}