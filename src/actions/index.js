import {
    LOAD_MOVIES,
    ADD_MOVIE,
    UPDATE_MOVIE,
    DELETE_MOVIE,
    SET_SELECTED_MOVIE_ID
} from "../constants";
import db from "../db";

export const setSelectedMovieId = id => ({
    type: SET_SELECTED_MOVIE_ID,
    id
});

export const loadMovies = () => {
    return dispatch => {
        db.table("movies")
            .toCollection()
            .sortBy("id")
            .then(movies => {
                dispatch({
                    type: LOAD_MOVIES,
                    payload: movies
                });
            });
    };
};

export const addMovie = (title, cb) => {
    return dispatch => {
        const movieToAdd = {title, which: 'watch'};
        console.log('test')
        db.table("movies")
            .add(movieToAdd)
            .then(id => {
                dispatch({
                    type: ADD_MOVIE,
                    payload: Object.assign({}, movieToAdd, {id})
                });
                cb();
            });
    };
};

export const updateMovie = (id, which) => {
    return dispatch => {
        db.table("movies")
            .update(id, { which })
            .then(() => {
                dispatch({
                    type: UPDATE_MOVIE,
                    payload: { id, which }
                });
            });
    };
};

export const deleteMovie = (id) => {
    // todo
    console.log(DELETE_MOVIE)
};