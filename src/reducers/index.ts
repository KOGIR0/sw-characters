import { combineReducers } from "redux";
import charactersReducers, { CharactersReducerStateType } from "./charactersReducers";

export type AllReducersType = {
    characters: CharactersReducerStateType
}

const allReducers = combineReducers({
    characters: charactersReducers,
});

export default allReducers;