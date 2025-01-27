import React from 'react';
import './MissionAction.css';

const MissionAction = ({missionId, onUpdateMissionStatus}) => {
    return (
        <div className='MissionAction'>
            <button
                className='MissionAction-btn'
                onClick={() => onUpdateMissionStatus(missionId, 'Active')}
            >
                LAUNCH
            </button>

            <button
                className='MissionAction-btn'
                onClick={() => onUpdateMissionStatus(missionId, 'Completed')}
            >
                COMPLETE
            </button>
        </div>
    );
}

export default MissionAction;