import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import SearchInputBox from './SearchInputBox';
import FetchMovieDetail from './FetchMovieDetail';
import MovieListContainer from './MovieListContainer';
import './App.css';

//const API_URL = 'https://omdbapi.com';
//const API_KEY = 'b947c005';
//const movies = movieListData.Search;

export default function MovieApp() {
    const [ID, setID] =useState('tt0381681'); // single movie id
    const [SearchText, setSearchText] = useState('sunset'); // search text

    return (

        <div className="App">
            <SearchInputBox onNewSearch={setSearchText}/>
            <MovieListContainer  SearchText={SearchText}  setID={setID} />       
            <FetchMovieDetail id={ID}/>
        </div>
    )
}
