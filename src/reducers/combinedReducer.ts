import { combineReducers } from "redux";
import charactersReducers from "./charactersReducers";

const combinedReducers = combineReducers({
    characters: charactersReducers,
});

export default combinedReducers;