import React from 'react';
import styles from './importanceText.module.css'

export default function ImportanceText({ importance }) {
    // Dynamicly chaning class to achive different colours for different importance:
    const dynamicClass = `${styles['importance-text']} ${styles[`importance-${importance.toLowerCase()}`]}`;

    return (
        <span className={dynamicClass}>
            {importance.toUpperCase()}
        </span>
    );
}