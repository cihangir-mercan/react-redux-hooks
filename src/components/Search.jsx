import React, {useState} from 'react';
import "./MovieCard.css";
import {addMovie} from "../actions";
import {useDispatch} from "react-redux";

const Search = () => {
    const [movie, setMovie] = useState("");

    const dispatch = useDispatch();
    const addMovieInner = (movie, cb) => dispatch(addMovie(movie, cb));

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovieInner(movie, () => {
            setMovie("");
        });
    }

    return <div className="search-container">
        <form onSubmit={handleSubmit}>
            <div className="bp3-input-group bp3-large ">
                <span className="bp3-icon bp3-icon-plus"/>
                <input
                    className="bp3-input"
                    placeholder="Add Movie to Watch List"
                    value={movie}
                    onChange={e => setMovie(e.target.value)} />
            </div>
        </form>
    </div>
};

export default Search;
