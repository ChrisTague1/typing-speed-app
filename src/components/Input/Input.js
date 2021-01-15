import React from 'react';
import './Input.css';

const input = (props) => {
    return (
        <div>
            <input 
                className={props.inputWordStyle} 
                type='text' 
                placeholder="Enter Current Word" 
                onChange={props.onInputChange} 
                value={props.text}
            />
        </div>
    );
}

export default input;