import React, { useState, useEffect } from 'react';

import { getLaunch } from '../../services/launches';

import './LaunchDetails.scss';

function LaunchDetails({ match }) {
    const [launch, setLaunch] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!launch.name && match.params.id) {
            getLaunchDetails();
        }
    }, []);

    const getLaunchDetails = async () => {
        setLaunch(await getLaunch(match.params.id));
        setLoading(false);
    };

    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {!loading &&
             <div className="launch-details">
                 <h4>{launch.name}</h4>
                 {launch.mission && <p className="description-style">{launch.mission.description}</p>}
                 <p>Launch Date: {new Date(launch.net).toLocaleString()}</p>
                 {launch.rocket &&
                 <ul>
                     <li className="section">Rocket {launch.rocket.id}</li>
                     <li><b>Name:</b> {launch.rocket.configuration.name}</li>
                 </ul>}
                 {launch.mission &&
                 <ul>
                     <li className="section">Mission {launch.mission.id}</li>
                     <li><b>Name:</b> {launch.mission.name}</li>
                     <li><b>Type:</b> {launch.mission.type}</li>
                     <li><b>Orbit:</b> {launch.mission.orbit}</li>
                 </ul>}
                 {launch.pad &&
                 <ul>
                     <li className="section">Pad</li>
                     <li><b>Name:</b> {launch.pad.name}</li>
                     <li><b>Location:</b> {launch.pad.location.name}</li>
                 </ul>}
             </div>
            }
        </div>
    );
}

export default LaunchDetails;