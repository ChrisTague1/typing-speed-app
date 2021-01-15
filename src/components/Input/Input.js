import React from 'react';
import './Input.css';

const input = ({ onInputChange, inputWordStyle }) => {
    return (
        <div>
            <input 
                className={inputWordStyle} 
                type='text' 
                placeholder="Enter Current Word" 
                onChange={onInputChange}  
            />
        </div>
    );
}

export default input;