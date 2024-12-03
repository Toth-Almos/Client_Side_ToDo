import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div to='/' className={styles.logo}>
                    LOGO
                </div>
                <nav>
                    <ul>
                        <li className={styles.menu_container}>
                            <div>
                                <Link to="/">Your List</Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to="/statistics">Statistics</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}