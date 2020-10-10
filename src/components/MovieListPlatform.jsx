import React, {useEffect} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {loadMovies} from "../actions";

const MovieListPlatform = () => {
    const movies = useSelector(state => state.movies) || [];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMovies())
    }, [dispatch])

    console.log('rendered', movies);

    return (

        <DndProvider backend={HTML5Backend}>
            <section className="list-container">
                <MovieList type="watch">
                    {movies
                        .filter(item => item.which === 'watch')
                        .map(item => (
                            <MovieCard key={item.id} id={item.id} title={item.title}/>
                        ))}
                </MovieList>

                <MovieList type="fav">
                    {movies
                        .filter(item => item.which === 'fav')
                        .map(item => (
                            <MovieCard key={item.id} id={item.id} title={item.title}/>
                        ))}
                </MovieList>
            </section>
        </DndProvider>
    );
};

export default MovieListPlatform;