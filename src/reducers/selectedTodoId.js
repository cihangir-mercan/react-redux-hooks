import { SET_SELECTED_MOVIE_ID } from "../constants";

const selectedTodoId = (state = 0, { type, id }) => {
    switch (type) {
        case SET_SELECTED_MOVIE_ID:
            return id;
        default:
            return state;
    }
};

export default selectedTodoId;
