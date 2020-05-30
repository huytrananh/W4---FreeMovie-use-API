import React from 'react'
import {Card, ListGroupItem, ListGroup, CardDeck} from 'react-bootstrap'

export default function MovieCard(props) {
    let movie = props.movie
    return (
        <CardDeck className="movie-list-card">
            <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
                    <Card.Body>
                        <Card.Title><h4><b>{movie.title}</b></h4> <h6><i className="date-text">{movie.release_date}</i></h6></Card.Title>
                        <Card.Text>{movie.overview}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Rating:</b> {movie.vote_average} star</ListGroupItem>      
                    </ListGroup>                
            </Card>
        </CardDeck> 
    )
}
