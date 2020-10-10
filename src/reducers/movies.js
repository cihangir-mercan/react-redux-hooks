import {LOAD_MOVIES, UPDATE_MOVIE, ADD_MOVIE, DELETE_MOVIE} from "../constants";

const movies = (state = [], {type, payload}) => {
    switch (type) {
        case LOAD_MOVIES:
            return payload;
        case ADD_MOVIE:
            return [...state, payload];
        case UPDATE_MOVIE: {
            const movieToUpdate = state.find(movie => movie.id === payload.id);
            const index = state.indexOf(movieToUpdate);
            const updatedMovie = Object.assign({}, movieToUpdate, {which: payload.which});
            return [
                ...state.slice(0, index),
                updatedMovie,
                ...state.slice(index + 1)
            ]
        }
        case DELETE_MOVIE:
            return state.filter(todo => todo.id !== payload);
        default:
            return state;
    }
};

export default movies;
