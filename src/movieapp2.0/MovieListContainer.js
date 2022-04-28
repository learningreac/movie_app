import React,{useState, useEffect} from 'react';
import MovieList from './MovieList';

const API_URL = 'https://omdbapi.com';
const API_KEY = 'b947c005';

export default function MovieListContainer ({SearchText,setID}){
    const [mldata, setMList] = useState(null); // movielist data

        // search movie list
        useEffect(() => {
            fetch(`${API_URL}?apikey=${API_KEY}&s=${SearchText}&type=movie&page=1`)
                .then(response => response.json())
                .then(obj => { console.log(obj); setMList(obj); })
                .catch(console.error);
        }, [SearchText]);
    
        if (null == mldata)
        return <div>loading... </div>
    
        return (
            <MovieList movies={mldata.Search} ClickforDetail={setID}/>
        )
}