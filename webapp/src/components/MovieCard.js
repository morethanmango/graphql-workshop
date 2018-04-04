import React from 'react'
import Rating from './Rating'

const MovieCard = ({ movie }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <img src={movie.poster} alt={movie.title} />
      </figure>
    </div>
    <div className="card-content has-text-centered">
      <h1 className="title is-5">{movie.title}</h1>
      <div className="subtitle is-6 has-text-grey">{movie.genre.join(', ')}</div>
      <div><Rating readonly initialRating={movie.rating} /></div>
    </div>
  </div>
)

export default MovieCard