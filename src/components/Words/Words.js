import React from 'react';
import './Words.css';

const words = (props) => {
    return (
        <div>
            <div>
                {props.currentWord}
            </div>
            <div>
                {props.nextWord}
            </div>
        </div>
    );
}

export default words;