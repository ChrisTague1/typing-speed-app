import React from 'react';
import styles from './Words.css';

const { border } = styles;

const words = () => {
    return (
        <div>
            <div className={border}>
                Current word
            </div>
            <div className={border}>
                Next word
            </div>
        </div>
    );
}

export default words;