import React from 'react';
import constants from '../../constants';
import './LiveWPM.css';

const livewpm = (props) => {
  const wpm = Math.floor(60 * (props.correctKeystrokes / constants.avgWordLength) / (constants.gameTime - props.time));
    return (
        <div>
            <h2>{wpm ? wpm : 0} WPM</h2>
        </div>
    );
}

export default livewpm;