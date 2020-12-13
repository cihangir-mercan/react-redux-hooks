import React, {useEffect} from "react";
import {Icon} from "@blueprintjs/core";
import './App.css';
import "./MovieList.css";
import "./MovieCard.css";
import MovieListPlatform from "./MovieListPlatform";
import Search from "./Search";
import Titles from "./Titles";
import {sendPerformanceAnalytics} from "../utils/PerfAnalytics";

function App() {

    useEffect(() => {
        sendPerformanceAnalytics();
    });

    return (
        <div className="App">
            <div className="header">
                <Search/>
                <Titles />
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
