import React from 'react'
import {Card, ListGroupItem, ListGroup, CardDeck} from 'react-bootstrap'

export default function MovieCard(props) {
    let movie = props.movie
    return (
            <CardDeck>
                <div>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />

                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.overview}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Date: {movie.release_date}</ListGroupItem>
                            <ListGroupItem>Rating: {movie.vote_average}</ListGroupItem>      
                        </ListGroup>

                </Card>
                </div>
            </CardDeck> 
    )
}
