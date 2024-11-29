import React from 'react';
import styles from './header.module.css';

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
                                <a href='./'>Your List</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href='./'>Statistics</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}