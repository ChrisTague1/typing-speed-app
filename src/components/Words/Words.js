import React from 'react';
import './Words.css';

const words = (props) => {
    const wordElements = props.words.map((word, index) => {
        return (
            <div className={(index === 0) ? 'currentWord' : 'nextWords'}>
                {word}
            </div>
        );
    })
    return (
        <div className='container'>
            <div className='box'>
                {wordElements}
            </div>
        </div>
    );
}

export default words;