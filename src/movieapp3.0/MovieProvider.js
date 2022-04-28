import React, {createContext, useContext, useState} from 'react';

const MovieContext = createContext();
export const useMovie = () => useContext(MovieContext); // custom hook with context p126

export default function MovieProvider ({children}) {
    const [ID, setID] =useState('tt0381681'); 
    const [SearchText, setSearchText] = useState('one day'); 

    return (
        <MovieContext.Provider value={{ID, setID, SearchText, setSearchText}} >
            {children}
        </MovieContext.Provider>
    );
};
