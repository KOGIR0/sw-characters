import { combineReducers } from "redux";
import charactersReducers from "./charactersReducers";

const allReducers = combineReducers({
    characters: charactersReducers,
});

export default allReducers;