import React from 'react'

const Card = ({name, image}) => {
    console.log(name);
  return (
    <img
      className='Card'
      atl={name}
      src={image} />
  )
}

export default Card;