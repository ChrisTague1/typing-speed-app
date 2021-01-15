import React from 'react';
import './Words.css';

const words = (props) => {
    return (
        <div className='container'>
            <div className='box nextWord'>
                {props.nextWord}
            </div>
            <div className='box currentWord'>
                {props.currentWord}
            </div>
        </div>
    );
}

export default words;