import React from 'react'
import MovieCard from './MovieCard'


export default function MovieList(props) {
    if(props.movieList === null){
        return(<div>Loading</div>)
    }
    return (
        <div className="movie-list">
            {props.movieList.map(item => {
                return(
                    <>
                        <MovieCard movie = {item} genresFromMovieList = {props.genresFromApp}/>
                    </>
                )
            })}
        </div>
    )
}
