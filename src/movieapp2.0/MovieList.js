import React from 'react';
import { List, Avatar } from 'antd';

//function MovieTitle({title}) {
//    return <a onClick={e=>console.log(title)}>{title}</a>;
//}


const MovieList = ({ movies,ClickforDetail}) => {

//    useEffect(() =>
//        console.log(movies)
//    );
    return (
        <div className='movie-list'>
            <List itemLayout='horizontal'>
                {movies.map((movie,index) => (
                    <List.Item key={movie.imdbID} >
                        <List.Item.Meta
                            avatar={<Avatar src={movie.Poster} />}
                            //title={<MovieTitle title={movie.Title}/>}
                            title={<a onClick={() => {console.log(movie.imdbID); ClickforDetail(movie.imdbID)}}>{movie.Title}</a>}
                            description={movie.Year}
                        />
                    </List.Item>
                ))}
            </List>
        </div>
    )

}

export default MovieList;



