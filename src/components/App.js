import React from "react";
import {Icon} from "@blueprintjs/core";
import './App.css';
import "./MovieList.css";
import "./MovieCard.css";
import MovieListPlatform from "./MovieListPlatform";
import Search from "./Search";

function App() {
    return (
        <div className="App">
            <div className="header">
               <Search/>
            </div>

            <div className="main">
                <MovieListPlatform/>
            </div>

            <div className="footer">
                <Icon icon="trash" iconSize={80}/>
            </div>

        </div>
    );
}

export default App;



