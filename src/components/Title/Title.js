import React from 'react';
import styles from './Title.css';

const Title = () => {
    return (
        <div>
            <h2 className={styles.headline}>
                Title
            </h2>
            <button>
                Start
            </button>
            <button>
                Reset
            </button>
        </div>
    );
}

export default Title;