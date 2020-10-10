import {combineReducers} from "redux";

import selectedTodoId from "./selectedTodoId";
import movies from "./movies";

export default combineReducers({
    movies,
    selectedTodoId
});
