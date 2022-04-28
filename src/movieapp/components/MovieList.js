import React from 'react';
import { List, Avatar } from 'antd';


const MovieList = ({ movies,onNewFetch}) => {

    return (
        <div className='movie-list'>
            <List itemLayout='horizontal'>
                {movies.map((movie,index) => (
                    <List.Item key={movie.imdbID} >
                        <List.Item.Meta
                            avatar={<Avatar src={movie.Poster} />}
                            title={<a onClick={() => {console.log(movie.imdbID); onNewFetch(movie.imdbID)}}>{movie.Title}</a>}
                            description={movie.Year}
                        />
                    </List.Item>
                ))}
            </List>
        </div>
    )

}

export default MovieList;



