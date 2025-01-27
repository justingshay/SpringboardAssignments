import React, {useState} from 'react';
import './MissionControl.css';
import MissionFilter from './MissionFilter';
import MissionCard from './MissionCard';
import MissionAction from './MissionAction';

const MissionControl = ({listMissions}) => {

    const INIT_FILTER = 'All';

    const [missions, setMissions] = useState(listMissions);
    const [filter, setFilter] = useState(INIT_FILTER);

    function updateMissionStatus (id, newStatus) {
        setMissions(prevMissions => prevMissions.map(mission => mission.id === id ? {...mission, status: newStatus} : mission ));
    }

    const filteredMissions = missions.filter(mission => filter === 'All' || mission.status === filter);

    return (
        <div className='MissionControl'>
            <h1>Space Mission Control</h1>
            <MissionFilter setFilter={setFilter}/>
            <br/>            
            {
                filteredMissions.map(mission => 
                    {
                        const {id, name, status, crew} = mission;

                        return (
                            <div
                                key={id}
                                className='MissionCard-container'
                            >
                                <MissionCard 
                                    name={name}
                                    status={status}
                                    crew={crew}
                                />
                                <MissionAction 
                                    missionId={id}
                                    onUpdateMissionStatus={updateMissionStatus}
                                />
                            </div>
                        );
                    }
                )
            }
        </div>
    )
}

export default MissionControl;