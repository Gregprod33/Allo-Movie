import React, { Component } from 'react';
import { Header } from './components';
import apiMovie, { apiMovieMap } from './conf/api.movie'
import Films from './features/films';


class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }  
  }

  updateSelectedMovie = (index) => {
    this.setState ({
      selectedMovie: index
    })
  }


  componentDidMount() {
    apiMovie.get('/discover/movie?api_key=6636b71f59e211d9a37a9eda92d8d050')
      .then( response => response.data.results)
      .then( moviesApi => {
        const movies = moviesApi.map( apiMovieMap)
        console.log(movies);
        this.updateMovies(movies);
      })
      .catch( err => console.log(err));
  }


  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  

  render() {
    return (

      <div className="App d-flex flex-column">
        <Header />
        <Films
          loaded= { this.state.loaded }
          updateMovies={ this.updateMovies }
          updateSelectedMovies = { this.updateSelectedMovie }
          movies = { this.state.movies }
          selectedMovie={ this.state.selectedMovie }
        />
      </div>
      );
    }
}

export default App;
