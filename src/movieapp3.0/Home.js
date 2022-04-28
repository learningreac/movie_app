import React from 'react';
import SearchInputBox from './components/SearchInputBox';
import MovieListContainer from './MovieListContainer';

export default function MovieHome() {
    return (
        <div>
            <SearchInputBox />
            <div className='grid-container'>
                <MovieListContainer />
            </div>
        </div>
    )
}