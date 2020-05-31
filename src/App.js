import React,{useEffect,useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Spinner} from 'react-bootstrap'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import CarouselSlide from './components/CarouselSlide'
import TrailerSection from './components/TrailerSection'


// 2. define API KEY
const apiKey = process.env.REACT_APP_APIKEY

function App() {

  //3. define state
  const [movieList, setMovieList] = useState([])
  const [typeOfMovie,setType] = useState("now_playing")
  const [genreList, setGenreList] = useState([])
  const [originalList, setOriginalList] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [isFetching, setIsFetching] = useState()
  const [totalPage, setTotalPage] = useState(1)

  // 1. get API Now Playing from themoviedb
  const getMovieList = async(listName, num) => {
    setIsFetching(true)
    let url = `https://api.themoviedb.org/3/movie/${listName}?api_key=${apiKey}&language=en-US&page=${num}`
    let data = await fetch(url)
    let result = await data.json()
    //3.1

    setMovieList(result.results) 
    setType(listName)
    setOriginalList(result.results)
    setPageNum(num)
    setIsFetching(false)
    setTotalPage(result.total_pages)
    console.log("MOVIE: ", result)
  }

  // Get API Genre from themoviedb
  const getGenreList = async() => {
    setIsFetching(true)
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    let data = await fetch(url)
    let result = await data.json()
    setGenreList(result.genres)
    setIsFetching(false)
    console.log("My genre is: ", result)
  }

  // Search Keyword
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
  useEffect(() => {
    getGenreList()
    getMovieList('now_playing', 1)
    
    
  }, [])
  // 5.
  if(movieList === null && genreList === null){
    return(<div><Spinner animation="border" /></div>)
  } 
  return (
    <div >
      <div className="film-body">
        <Navbar/>
        <CarouselSlide/>
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
                <Button className="btn" variant={typeOfMovie === "now_playing" ? "secondary" : ""} onClick={() => getMovieList("now_playing",1)}>Now Playing</Button> 
                <Button className="btn" variant={typeOfMovie === "top_rated" ? "secondary" : ""} onClick={() => getMovieList("top_rated",1)}>Top Rated</Button>
                <Button className="btn" variant={typeOfMovie === "popular" ? "secondary" : ""} onClick={() => getMovieList("popular",1)}>Popular</Button>
                <Button className="btn" variant={typeOfMovie === "upcoming" ? "secondary" : ""} onClick={() => getMovieList("upcoming",1)}>Upcoming</Button> 
              </div>
              
              <div className="right">
                {pageNum -1 > 0 && (<Button className="btn" onClick={() => getMovieList(typeOfMovie,pageNum-1)}>Previous</Button>) }
                {pageNum -2 > 0 && (<Button className="btn" onClick={() => getMovieList(typeOfMovie,pageNum-2)}>{pageNum-2}</Button>)}
                {pageNum -1 > 0 && (<Button className="btn" onClick={() => getMovieList(typeOfMovie,pageNum-1)}>{pageNum-1}</Button>)}
                <Button className="btn" variant="secondary" onClick={() => getMovieList(typeOfMovie,pageNum)}>{pageNum}</Button>
                {pageNum + 1 < totalPage+1 && (<Button className="btn" onClick={() => getMovieList(typeOfMovie,pageNum+1)}>{pageNum+1}</Button>)}
                {pageNum + 2 < totalPage+1 && (<Button className="btn" onClick={() => getMovieList(typeOfMovie,pageNum+2)}>{pageNum+2}</Button>)}
                {pageNum + 1 < totalPage+1 && (<Button className="btn" onClick={() => getMovieList(typeOfMovie,pageNum+1)}>Next</Button>)}
              </div>
            </div>
            <hr/>
            <div>
              <MovieList movieList = {movieList} genresFromApp={genreList} isFetching={isFetching}/>
            </div>
        </div>    
        <TrailerSection/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
