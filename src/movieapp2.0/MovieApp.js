import React, { useState } from 'react';

import SearchInputBox from './SearchInputBox';
import FetchMovieDetail from './FetchMovieDetail';
import MovieListContainer from './MovieListContainer';
import './App.css';

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
