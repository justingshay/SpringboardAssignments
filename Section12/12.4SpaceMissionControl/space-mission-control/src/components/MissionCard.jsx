import React from 'react';
import './MissionCard.css';

const MissionCard = ({name, status, crew}) => {
    return (
        <div className='MissionCard'>
          <h2 className='MissionCard-h2'>{name}</h2>
          
          <p className='MissionCard-p'><span>Status:</span> {status}</p>
          <p className='MissionCard-p'><span>Crew:</span> {crew.join(", ")}</p>
        </div>
    );
}

export default MissionCard;