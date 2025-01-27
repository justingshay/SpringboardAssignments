import React from 'react';
import './MissionFilter.css';

const MissionFilter = ({setFilter}) => {
    const STATUSES = ['All', 'Planned', 'Active', 'Completed'];

    return (
        <>
            {
                STATUSES.map((status, index) => (
                    <button
                        key={index}
                        onClick={() => setFilter(status)}
                        className='MissionFilter'
                    >
                        <b>{status}</b>
                    </button>
                ))
            }
        </>
    );
}

export default MissionFilter;