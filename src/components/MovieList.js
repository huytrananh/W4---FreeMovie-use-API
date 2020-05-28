import React from 'react'
import MovieCard from './MovieCard'


export default function MovieList(props) {
    if(props.list === null){
        return(<div>Loading</div>)
    }
    return (
        <div className="movie-list">
            {props.list.map(item => {
                return(
                    <>
                        <MovieCard movie = {item}/>
                    </>
                )
            })}
        </div>
    )
}
