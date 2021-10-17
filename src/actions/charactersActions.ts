import { ADD_TO_FAVORITES,
    FETCH_CHARACTERS_STARTED, 
    FETCH_CHARACTERS_FAILURE, 
    FETCH_CHARACTERS_SUCCESS, 
    REMOVE_FROM_FAVORITES,
    SET_CURRENT_PAGE
} from "./actionTypes";

export const addToFavorites = (character: any) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: character
    };
}

export const setCurrentPage = (pageNum: Number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: pageNum
    }
}

export const removeFromFavorites = (character: any) => {
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

export type FetchCharactersSuccessType = {
    characters: any,
    pagesNum: Number,
    currentPage: Number
}

const fetchCharactersSuccess = ({characters, pagesNum, currentPage}: FetchCharactersSuccessType) => {
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

export const fetchCharacters = (page: Number) => {
    return (dispatch: Function) => {
        dispatch(fetchCharactersStarted());

        fetch("https://swapi.dev/api/people/?page=" + page)
        .then(data => {
            return data.json();
        })
        .then(data => {
            const results = data.results;
            const pagesNum = data.count % 10 === 0 ? data.count / 10 : Math.floor(data.count / 10) + 1;
            dispatch(fetchCharactersSuccess({
                characters: results,
                pagesNum: pagesNum,
                currentPage: page
            }))
        })
        .catch(e => {
            dispatch(fetchCharactersFailure());
        })
    }
}