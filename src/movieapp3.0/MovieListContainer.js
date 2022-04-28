import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import { useMovie } from './MovieProvider';


const API_URL = 'https://omdbapi.com';
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;


function geturl(SearchText) {
    return `${API_URL}?apikey=${API_KEY}&s=${SearchText}&type=movie&page=1`;
}

export default function MovieListContainer() {
    const [mldata, setMList] = useState(null); // movielist data
    const { SearchText } = useMovie();

    // search movie list
    useEffect(() => {
        console.log('-- Asearch Text' + SearchText);
        const url = geturl(SearchText);
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(obj => { console.log(obj); setMList(obj); })
            .catch(console.error);
    }, [SearchText]);

    if (null == mldata)
        return <div>loading... </div>

    return (
        <div >
            <MovieList movies={mldata.Search} />
        </div>
    )
}