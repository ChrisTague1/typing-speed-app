import React from 'react';
import './Words.css';
import wordList from './words.txt';

const words = () => {
    return (
        <div>
            <div>
                Current word
            </div>
            <div>
                Next word
            </div>
        </div>
    );
}

export default words;