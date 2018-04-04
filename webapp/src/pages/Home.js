/**
 * TODO: Fetch movies
 */
import React from 'react'
import { Link } from 'react-router-dom'

// TODO 1: use GetMovies query
// import { GetMovies } from '../queries'
import { MovieCard } from '../components'

// TODO 2: replace dummy data with data from Movies API
import data from '../data'

const Home = () => (
  <div>
    <div className="columns is-multiline">
      {
        data.movies.map(movie => (
          <div key={movie.id} className="column is-one-third">
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))
      }
    </div>
  </div>
)

export default Home