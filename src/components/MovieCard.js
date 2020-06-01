import React,{useState} from 'react'
import {Card, ListGroupItem, ListGroup, CardDeck, Badge} from 'react-bootstrap'
import ReactModal from 'react-modal'
import YouTube from '@u-wave/react-youtube'

const apiKey = process.env.REACT_APP_APIKEY

export default function MovieCard({movie, genresFromMovieList}) {
    // let movie = props.movie
    // let genres = props.genresFromMovieList

    //1. grab the value from genre_ids
    //2. grab the each value from genreList
    //3. if value 1 === value 2.id
    //4. return value 2.name
    //3.1 else if its no same, just ignore 
    const [modalOpen, setModalOpen] = useState(false)
    const [key, setKey] = useState(null)
    const getVideos = async(id) => {
        console.log(id)
        let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
        let data = await fetch(url)
        let result = await data.json()
        let akey = result.results[0].key
        setKey(akey)
        openModal()
        console.log("My video id is: ", result)
      }

      const closeModal = () => {
        //change isOpen to false
        setModalOpen(false)
      }
    
      const openModal = () => {
        setModalOpen(true)
      }
    return (
        <>
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
                    <ListGroupItem onClick={() => getVideos(movie.id)}><a href="#">Watch</a></ListGroupItem>            
                </ListGroup>      
                <ReactModal isOpen={modalOpen}>
                    <YouTube className="video-youtube" video={key} autoplay />
                    <button onClick={() => closeModal()}>Close</button>
                </ReactModal>       
            </Card>
        </CardDeck> 

        </> 
    )
}
