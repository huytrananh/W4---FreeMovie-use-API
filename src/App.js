import React,{useEffect,useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel, Button ,Card , CardDeck} from 'react-bootstrap'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'






// 2. define API KEY
const apiKey = process.env.REACT_APP_APIKEY

function App() {

  //3. define state
  let [movieList, setMovieList] = useState([])
  let [type,setType] = useState("now_playing")

  // 1. get API Now Playing from themoviedb
  const getMovieList = async(listName, num) => {
    let url = `https://api.themoviedb.org/3/movie/${listName}?api_key=${apiKey}&language=en-US&page=${num}`
    let data = await fetch(url)
    let result = await data.json()
    //3.1
    setMovieList(result.results) // result + results ?????
    setType(listName)
    console.log("MOVIE: ", result)
  }

  // useEffect(function you wanna fire , when you call the useEffect again )
  useEffect(() => { getMovieList("now_playing") }, [])
  // 5.
  if(movieList == null){
    return(<div>Loading</div>)
  }
  return (
    <div>
      <Navbar/>
      <div>
        <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://pixelz.cc/wp-content/uploads/2018/12/robin-hood-movie-uhd-4k-wallpaper.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Robin Hood</h3>
                    <p>Integer condimentum lorem in mattis feugiat. Integer nibh risus, lacinia a porta sed, sagittis a ante. Morbi sed vulputate urna. Morbi efficitur urna ut justo efficitur, non mollis ligula fermentum. Aenean vel velit a nibh imperdiet gravida non non augue. </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/37945.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>The Justice</h3>
                    <p>Integer condimentum lorem in mattis feugiat. Integer nibh risus, lacinia a porta sed, sagittis a ante. Morbi sed vulputate urna. Morbi efficitur urna ut justo efficitur, non mollis ligula fermentum. Aenean vel velit a nibh imperdiet gravida non non augue. </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://imgpile.com/images/2b2edec91686f0087ab8be2542ea2da9.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>The Mask</h3>
                    <p>Integer condimentum lorem in mattis feugiat. Integer nibh risus, lacinia a porta sed, sagittis a ante. Morbi sed vulputate urna. Morbi efficitur urna ut justo efficitur, non mollis ligula fermentum. Aenean vel velit a nibh imperdiet gravida non non augue. </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
      </div>
      <div className="switch-movie-section">
          <h1>Now Playing</h1>
          <div className="top">
            <div className="left">
              <Button onClick={() => getMovieList("top_rated")}>Top Rated</Button>
              <Button onClick={() => getMovieList("popular")}>Popular</Button>
              <Button onClick={() => getMovieList("upcoming")}>Upcoming</Button> 
            </div>
            <div className="right">
              <Button onClick={() => getMovieList(type,1)}>1</Button>
              <Button onClick={() => getMovieList(type,2)}>2</Button>
              <Button onClick={() => getMovieList(type,3)}>3</Button>
              <Button onClick={() => getMovieList(type,4)}>4</Button>
              <Button onClick={() => getMovieList(type,5)}>5</Button>
            </div>
          </div>
          <div>
            <MovieList list = {movieList}/>
          </div>
          
          
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
