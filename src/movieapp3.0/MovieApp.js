import React from 'react';
import { useRoutes } from "react-router-dom";
import './movie.css';
import MovieProvider from './MovieProvider';
import MovieHome from './Home';
import FetchMovieDetail from './FetchMovieDetail';


function AppRoute() {
    let element = useRoutes([
        { path: "/movie_app", element: <MovieHome />},
        { path: "/movie_app/movie/:ID", element: <FetchMovieDetail /> }

    ]);
    return element;
}


export default function MovieApp() {

    return (
        <MovieProvider>
            <AppRoute />
        </MovieProvider>
    )
}
