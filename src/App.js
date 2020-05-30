import React,{useEffect,useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel, Button ,Card , CardDeck} from 'react-bootstrap'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
// import Carousel from './components/Carousel'

// 2. define API KEY
const apiKey = process.env.REACT_APP_APIKEY

function App() {

  //3. define state
  let [movieList, setMovieList] = useState([])
  let [typeOfMovie,setType] = useState("now_playing")

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
    <div >
      <div className="film-body">
        <Navbar/>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://pixelz.cc/wp-content/uploads/2018/12/robin-hood-movie-uhd-4k-wallpaper.jpg" alt="First slide"/>
            <Carousel.Caption>
              <h3>Robin Hood</h3>
              <p>Integer condimentum lorem in mattis feugiat. Integer nibh risus, lacinia a porta sed, sagittis a ante. Morbi sed vulputate urna. Morbi efficitur urna ut justo efficitur, non mollis ligula fermentum. Aenean vel velit a nibh imperdiet gravida non non augue. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://wallpaperaccess.com/full/37945.jpg" alt="Second slide"/>
            <Carousel.Caption>
              <h3>The Justice</h3>
              <p>Integer condimentum lorem in mattis feugiat. Integer nibh risus, lacinia a porta sed, sagittis a ante. Morbi sed vulputate urna. Morbi efficitur urna ut justo efficitur, non mollis ligula fermentum. Aenean vel velit a nibh imperdiet gravida non non augue. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://imgpile.com/images/2b2edec91686f0087ab8be2542ea2da9.jpg" alt="Third slide"/>
            <Carousel.Caption>
              <h3>The Mask</h3>
              <p>Integer condimentum lorem in mattis feugiat. Integer nibh risus, lacinia a porta sed, sagittis a ante. Morbi sed vulputate urna. Morbi efficitur urna ut justo efficitur, non mollis ligula fermentum. Aenean vel velit a nibh imperdiet gravida non non augue. </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="switch-movie-section">
          <nav class="navbar navbar-light justify-content-between">
            <h1>Now Playing Films</h1>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0 btn-search" type="submit">Search</button>
            </form>
          </nav>
            <hr/>
            <div className="top">
              <div className="left">
                <Button className="btn" onClick={() => getMovieList("top_rated")}>Top Rated</Button>
                <Button className="btn" onClick={() => getMovieList("popular")}>Popular</Button>
                <Button className="btn" onClick={() => getMovieList("upcoming")}>Upcoming</Button> 
              </div>
              
              <div className="right">
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,1)}>1</Button>
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,2)}>2</Button>
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,3)}>3</Button>
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,4)}>4</Button>
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,5)}>5</Button>
              </div>
            </div>
            <hr/>
            <div>
              <MovieList list = {movieList}/>
            </div>
        </div>    
        <div className="trailer-section">
          <h1>Trailer</h1>
          <hr/>
          <div class="card text-center trailer-top">
            <iframe width="100%" height="400"
              src="https://www.youtube.com/embed/7iZ3TjJxVp4">
            </iframe>
          </div>
          <div class="card-deck">
            <div class="card">
              <iframe width="100%" height="200"
                src="https://www.youtube.com/embed/yGY484EPe5U">
              </iframe>
              <div class="card-footer">
                <small class="text-muted">Wonder woman 2</small>
              </div>
            </div>
            <div class="card">
              <iframe width="100%" height="200"
                src="https://www.youtube.com/embed/a5SxyQ-9YDA">
              </iframe>
              <div class="card-footer">
                <small class="text-muted">Jame Bond 007</small>
              </div>
            </div>
            <div class="card">
              <iframe width="100%" height="200"
                src="https://www.youtube.com/embed/D3EdI6G2tF4">
              </iframe>
              <div class="card-footer">
                <small class="text-muted">Coronavirus</small>
              </div>
            </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
