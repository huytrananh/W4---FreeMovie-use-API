import React,{useEffect,useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel, Button} from 'react-bootstrap'
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
  let [genreList, setGenreList] = useState([])
  let [originalList, setOriginalList] = useState([])

  // 1. get API Now Playing from themoviedb
  const getMovieList = async(listName, num) => {
    let url = `https://api.themoviedb.org/3/movie/${listName}?api_key=${apiKey}&language=en-US&page=${num}`
    let data = await fetch(url)
    let result = await data.json()
    //3.1
    setMovieList(result.results) // result + results ?????
    setType(listName)
    setOriginalList(result.results)
    console.log("MOVIE: ", result)
  }

  // Get API Genre from themoviedb
  const getGenreList = async() => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    let data = await fetch(url)
    let result = await data.json()
    getMovieList("now_playing")
    setGenreList(result.genres)
    console.log("My genre is: ", result)
  }

  let keyWord = ''
  const searchByKeyWord = (e) => {
    e.preventDefault()
    console.log("Hehehe", keyWord)
    searchTheKeyword(keyWord)
  }
  const searchTheKeyword = (keyWord) => {
    console.log("This from App: ", keyWord)
    if(keyWord === ''){
      setMovieList(originalList)
      return
    }
    //1. grab the movie list
    //2. grab each item from list
    //3. check its include that keyword
    //4. if that include that save into another array
    //5. set that array into state so user can see
    let filteredList = movieList.filter(movie => movie.title.toLowerCase().includes(keyWord.toLowerCase()))
    setMovieList(filteredList)
    
  }
  
  // useEffect(function you wanna fire , when you call the useEffect again )
  useEffect(() => { getGenreList() }, [])
  // 5.
  if(movieList === null && genreList === null){
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
              <p>Robin Hood is a legendary heroic outlaw originally depicted in English folklore and subsequently featured in literature and film. According to legend, he was a highly skilled archer and swordsman. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://wallpaperaccess.com/full/37945.jpg" alt="Second slide"/>
            <Carousel.Caption>
              <h3>Justice League</h3>
              <p>Steppenwolf and his Parademons set out to take over the Earth. However, Batman seeks the help of Wonder Woman to assemble and recruit Flash, Cyborg and Aquaman to thwart the powerful new enemy. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://imgpile.com/images/2b2edec91686f0087ab8be2542ea2da9.jpg" alt="Third slide"/>
            <Carousel.Caption>
              <h3>Halloween</h3>
              <p>After a narrow escape over four decades ago, Laurie Strode comes face-to-face with Michael Myers after he escapes from captivity. She must confront her worst fears and put an end to his killing spree. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://images.hdqwalls.com/wallpapers/black-widow-4k-movie-2020-vn.jpg" alt="Fourth slide"/>
            <Carousel.Caption>
              <h3>Black Widow</h3>
              <p>At birth the Black Widow (aka Natasha Romanova) is given to the KGB, which grooms her to become its ultimate operative. When the U.S.S.R. breaks up, the government tries to kill her as the action moves to present-day New York, where she is a freelance operative. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://mocah.org/uploads/posts/500685-avatar.jpg" alt="Fifth slide"/>
            <Carousel.Caption>
              <h3>Avatar 2</h3>
              <p>12 years following the events of the original film, Jake Sully and Neytiri have formed a new family together and the two are attempting to do anything to keep it together. However, they are forced to leave their home and explore the different regions of Pandora when an old threat returns to finish what it started. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://mocah.org/uploads/posts/561843-game-of-thrones.jpg" alt="Sixth slide"/>
            <Carousel.Caption>
              <h3>Game of Thrones</h3>
              <p>A Night's Watch deserter is tracked down; Lord Eddard "Ned" Stark learns that his mentor has died; Viserys Targaryen plots to win back the throne; Robert arrives at Winterfell with his family; Ned prepares to leave for King's Landing. </p>
            </Carousel.Caption>
          </Carousel.Item>


          
        </Carousel>
        <div className="switch-movie-section">
          <nav class=" navbar-light justify-content-between top-section">
            <h1>Movie Online</h1>
            <form class="form-inline" onSubmit={ (e) => searchByKeyWord(e)}>
              <input class="form-control mr-sm-2" onChange={(e) => keyWord = e.target.value}type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0 btn-search" type="submit">Search</button>
            </form>
          </nav>
            <hr/>
            <div className="top">
              <div className="left">
              <Button className="btn" onClick={() => getMovieList("now_playing")}>Now Playing</Button> 
                <Button className="btn" onClick={() => getMovieList("top_rated")}>Top Rated</Button>
                <Button className="btn" onClick={() => getMovieList("popular")}>Popular</Button>
                <Button className="btn" onClick={() => getMovieList("upcoming")}>Upcoming</Button> 
              </div>
              
              <div className="right">
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,1)}>Previous</Button>
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,1)}>1</Button>
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,2)}>2</Button>
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,3)}>3</Button>
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,4)}>4</Button>
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,5)}>5</Button>
                <Button className="btn" onClick={() => getMovieList(typeOfMovie,1)}>Next</Button>
              </div>
            </div>
            <hr/>
            <div>
              <MovieList movieList = {movieList} genresFromApp={genreList}/>
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
