import React from 'react';
import './TimeLeft.css';

const timeleft = (props) => {
    return (
        <h2>{props.time} seconds</h2>
    );
}

export default timeleft;