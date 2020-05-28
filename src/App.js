import React,{useEffect,useState} from 'react'
import './App.css'
import MovieList from './components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Carousel, Button,Card, CardDeck} from 'react-bootstrap'
import Footer from './components/Footer'






// 2. define API KEY
const apiKey = process.env.REACT_APP_APIKEY

function App() {

  //3. define state
  let [movieList, setMovieList] = useState([])


  // 1. get API Now Playing from themoviedb
  const getMovieList = async(listName) => {
    let url = `https://api.themoviedb.org/3/movie/${listName}?api_key=${apiKey}&language=en-US&page=1`
    let data = await fetch(url)
    let result = await data.json()
    //3.1
    setMovieList(result.results) // result + results ?????
    console.log("MOVIE: ", result)
  }

  // useEffect(function you wanna fire , when you call the useEffect again )
  useEffect(() => {
    getMovieList("now_playing")
  }, [])
  // 5.
  if(movieList == null){
    return(<div>Loading</div>)
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="switch-movie-section">
          <h1>Movie Hits</h1>
          <Button onClick={() => getMovieList("top_rated")}>Top Rated</Button>
          <Button onClick={() => getMovieList("popular")}>Popular</Button>
          <Button onClick={() => getMovieList("upcoming")}>Upcoming</Button>
          <MovieList list = {movieList}/>
      </div>
      <div className="trailer-section">
        <h1>Trailer</h1>
        <div>Video</div>
        
        <CardDeck>
          <div className="movie-list">
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </div>
        </CardDeck>
 
      </div>
        <Footer/>
    </div>
  )
}

export default App;
