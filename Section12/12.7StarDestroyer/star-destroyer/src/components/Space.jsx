import React, { useEffect, useState } from 'react';
import Star from './Star';
import '../index.css';

const Space = () => {
    const STAR_SIZE = 50;

    const [stars, setStars] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newStar = {
                id: Math.random() * Math.random(),
                x: Math.random() * (window.innerWidth - STAR_SIZE),
                y: Math.random() * (window.innerHeight - STAR_SIZE)
            };

            setStars(prev => [...prev, newStar]);
        }, 2500);

        return () => clearInterval(intervalId);
    }, []);

    function destroyStar(id) {
        setStars(stars.filter(star => star.id !== id));
    }

    return (
    <div className='Space'>
        {
            stars.map(star => (
                <Star 
                    key={star.id}
                    id={star.id}
                    position={{x: star.x, y: star.y}}
                    destroyStar={destroyStar}/>
            ))
        }
    </div>
  )
}

export default Space;