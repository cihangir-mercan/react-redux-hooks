import React, {useRef} from 'react';
import "./MovieCard.css";
import {useDrag} from "react-dnd";

const MovieCard = ({id, title}) => {
    const ref = useRef(null);
    const [{isDragging}, drag] = useDrag({
        item: {type: "card", id},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const opacity = isDragging ? 0 : 1;
    drag(ref);
    return (
        <div ref={ref} style={{opacity}} className="bp3-card bp3-interactive bp3-elevation-0 card">
            <h5 className="bp3-heading">   {title}</h5>
        </div>
    );
};

export default MovieCard;
