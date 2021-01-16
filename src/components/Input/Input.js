import React from 'react';
import './Input.css';

const input = (props) => {
    return (
        <div>
            <input 
                className={props.inputWordStyle}
                id='inputBox' 
                type='text' 
                placeholder="Enter Current Word" 
                onChange={props.onInputChange} 
                value={props.text}
                disabled={props.disabled}
            />
        </div>
    );
}

export default input;