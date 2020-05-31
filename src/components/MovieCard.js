import React from 'react'
import {Card, ListGroupItem, ListGroup, CardDeck, Badge} from 'react-bootstrap'

export default function MovieCard({movie, genresFromMovieList}) {
    // let movie = props.movie
    // let genres = props.genresFromMovieList

    //1. grab the value from genre_ids
    //2. grab the each value from genreList
    //3. if value 1 === value 2.id
    //4. return value 2.name
    //3.1 else if its no same, just ignore 

    return (
        <CardDeck className="movie-list-card">
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
                <Card.Body>
                    <Card.Title><h4><b>{movie.title}</b></h4> <h6><i className="date-text">{movie.release_date}</i></h6> {movie.genre_ids.map(id => {return(
                        <Badge className="genre-list" variant="danger">{genresFromMovieList.find(genre => id === genre.id).name}</Badge>
                    )})}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><b>Rating:</b> {movie.vote_average} star</ListGroupItem>         
                </ListGroup>                
            </Card>
        </CardDeck> 
    )
}
