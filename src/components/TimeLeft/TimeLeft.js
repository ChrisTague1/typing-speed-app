import React from 'react';
import './TimeLeft.css';

const timeleft = (props) => {
    return (
        <h2>
            {props.time.toFixed(1)} seconds
        </h2>
    );
}

export default timeleft;