import React from 'react';

import "./LaunchItem.scss";

const LaunchItem = ({ launch }) => {
    const { name, rocket, pad, net } = launch;

    return (
        <div className="launch-style">
            <h3>{ name }</h3>
            <p><b>Location:</b> <span>{ pad.location.name }</span></p>
            <p><b>Rocket Id:</b> <span>{ rocket.id }</span></p>
            <p><b>Launch Date:</b> <span>{ new Date(net).toLocaleString() }</span></p>
        </div>
    )
};

export default LaunchItem;