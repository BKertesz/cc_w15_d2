import React from 'react'
import MovieList from '../components/MovieList'
import movieData from '../movie_db.json'
import MovieDetail from '../components/MovieDetail'

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allMovies:[],
      currentMovie:null
    }
    this.handleMovieSelect = this.handleMovieSelect.bind(this)
  }

  getMovieData(url){
    //URL was broken soo improvised and loaded by local json
    fetch(url)
      .then(res => res.json())
      .then(moviesData => this.setState({allMovies: moviesData}))
      .catch(error => console.log("Error:", error))
  }

  componentDidMount(){
    this.setState({allMovies:movieData.feed.results})
  }

  handleMovieSelect(index){
    this.setState({currentMovie:this.state.allMovies[index]})
    // console.log(this.state.currentMovie)
  }

  render(){
    return(
      <div>
      <h1>Top Movie List UK</h1>
      <MovieList movies={this.state.allMovies} onMovieSelect={this.handleMovieSelect}/>
      <MovieDetail movie={this.state.currentMovie} />
      </div>
    )
  }
}

export default MoviesContainer
