import React from 'react'
import MovieCard from './MovieCard'
import {Spinner} from 'react-bootstrap'


export default function MovieList(props) {
    if(props.movieList === null){
        return(<div><Spinner animation="border" /></div>)
    }
    if(props.isFetching){
        return (<div><Spinner animation="border" /></div>)
      }
    return (
        <div className="movie-list">
            {props.movieList.map((item) => {
                return(
                    <MovieCard key={item.id} openModalFromMovieList={props.openModal} movie={item} genresFromMovieList={props.genresFromApp} getVideos={props.getVideos}/>
                )
            })}
        </div>
    )
}
