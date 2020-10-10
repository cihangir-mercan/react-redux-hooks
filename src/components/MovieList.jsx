import React, {useRef} from 'react';
import "./MovieList.css";
import {useDrop} from "react-dnd";
import {useDispatch} from "react-redux";
import {updateMovie} from "../actions";

const MovieList = ({type, children}) => {
    const ref = useRef(null);
    const dispatch = useDispatch();

    const [, drop] = useDrop({
        accept: "card",
        drop(item) {
            dispatch(updateMovie(item.id, type))
        }
    });
    drop(ref);
    return <div ref={ref} className={"list " + type + "-list"}>
        {children}
    </div>;
};


export default MovieList;