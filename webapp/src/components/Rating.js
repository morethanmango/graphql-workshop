import React from 'react'
import ReactRating from 'react-rating'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import solidStar from '@fortawesome/fontawesome-free-solid/faStar'
import star from '@fortawesome/fontawesome-free-regular/faStar'

const Rating = props => (
  <ReactRating
    emptySymbol={<FontAwesomeIcon icon={star}/>}
    fullSymbol={<FontAwesomeIcon icon={solidStar}/>}
    fractions={2}
    {...props}
  />
)

export default Rating