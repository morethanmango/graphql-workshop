import React, { Fragment } from 'react'

const groupShowingsByCinema = showings => (
  showings.reduce((cinemas, showing) => {
    const existentCinema = cinemas.find(cinema => cinema.id === showing.cinema.id)
    existentCinema
      ? existentCinema.times.push(showing.time)
      : cinemas.push({ ...showing.cinema, times: [showing.time] })
    return cinemas
  }, [])
)

const Showings = ({ showings }) => {
  const cinemas = groupShowingsByCinema(showings)

  return (
    <Fragment>
      {cinemas.map(cinema => (
        <div style={{marginTop: 20, marginBottom: 20}} key={cinema.id}>
          <div className="title is-6" style={{marginBottom: 10}}>{cinema.name}</div>
          <div className="tags">
            {cinema.times.map(time =>
              <span className="tag" key={time}>{time}</span>
            )}
          </div>
        </div>
      ))}
    </Fragment>
  )
}

export default Showings