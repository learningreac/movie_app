import React,{useState, useEffect} from 'react';
import MovieDetail from './Moviedetail';

const API_URL = 'https://omdbapi.com';
const API_KEY = 'b947c005';

export default function FetchMovieDetail({ id }) {
    const [mdata, setData] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`)
            .then(response => response.json())
            .then(obj => { console.log(obj); setData(obj); })
            .catch(console.error);
    }, [id]);

    if (null == mdata)
        return <div>loading... </div>

    return (
        <MovieDetail
            isFetching={false}
            Title={mdata.Title}
            Type={mdata.Type}
            Year={mdata.Year}
            Poster={mdata.Poster} 
        />
    )
}