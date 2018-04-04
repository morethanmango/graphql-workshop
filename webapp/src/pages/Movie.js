/**
 * TODO: Fetch the current movie by id, and rate the movie
 */

import React from 'react'
import { Showings, Rating } from '../components'

// TODO 1: use GetMovie query and RateMovie mutation when implemented
// import { GetMovie, RateMovie } from '../queries'

// TODO 2: replace dummy data with data from Movies API
import data from '../data'

const Movie = ({ match }) => {
  const movie = data.movies.find(movie => movie.id === match.params.id)
  return (
    <div>
      <div className="columns">
        <div className="column">
          <figure className="image">
            <img src={movie.poster} alt={movie.title} />
          </figure>
        </div>
        <div className="column">
          <h1 className="title">{movie.title}</h1>
          <div className="subtitle is-6 has-text-grey">{movie.genre.join(', ')}</div>
          <div style={{marginTop: 20, marginBottom: 20}}>
            <Rating
              initialRating={movie.rating}
              onChange={rating => console.log(rating)}
            />
          </div>
          <div style={{marginTop: 20, marginBottom: 60}}>
            {movie.plot}
          </div>
          <div>
            <Showings showings={movie.showings}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie