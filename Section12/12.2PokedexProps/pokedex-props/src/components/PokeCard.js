import React from 'react';
import './PokeCard.css';

const PokeCard = ({id, name, img, type, exp}) => {
  return (
    <div className="PokeCard">
        <small>#0{id}</small>
        <h4>{name}</h4>
        <img src={img} alt={`image of ${name}`} />
        <small>
            <span>Type: {type}</span> <br/> <span>Exp: {exp}</span>
        </small>
    </div>
    
  )
}

export default PokeCard;
