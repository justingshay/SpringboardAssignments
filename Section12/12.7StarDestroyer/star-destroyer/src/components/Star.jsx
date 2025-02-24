import React, { useRef, useEffect } from 'react';
import '../index.css';

const Star = ({id, position, destroyStar}) => {
    const starRef = useRef(null);

    useEffect(() => {
        const star = starRef.current;
        star.focus();
    }, []);

    function handleClick(event) {
        destroyStar(id);
    }

    return (
    <div
        ref={starRef}
        onClick={handleClick}
        style={{left: position.x, top: position.y}}
        className='Stars'>
            ☪ 
    </div>
  )
}

export default Star