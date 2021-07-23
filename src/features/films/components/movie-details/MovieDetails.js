import React, { Component } from 'react';

export default class MovieDetails extends Component {

  render() {
    return (
    <div className="w-25 bg-light p-4 d-flex flex-column text-center">
      <h5>{ this.props.movie.title }</h5>
      <hr className="w-100" />
      <div>
        <img className = "w-100" src= { this.props.movie.img } alt="movie" />
      </div>
      <span className="text-secondary">{ this.props.movie.details }</span>
      <hr className="w-100" />
      <span>{ this.props.movie.description }</span>
    </div>
    );
  }

}