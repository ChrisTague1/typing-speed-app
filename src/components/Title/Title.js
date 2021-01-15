import React from 'react';
import './Title.css';

const Title = (props) => {
    return (
        <div className='Title'>
            <h2 className='headline'>
                Typing Speed Test
            </h2>
            <button onClick={props.startTest}>Start Test</button>
            <button onClick={props.resetTest}>Reset</button>
        </div>
    );
}

export default Title;