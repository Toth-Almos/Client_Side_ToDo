import React from 'react';
import styles from './statistics.module.css';

export default function Statistics({ tasks }) {
    const totalTasks = tasks.length;    //number of total tasks
    const completedTasks = tasks.filter(task => task.is_done).length;   //number of completed tasks
    const pendingTasks = totalTasks - completedTasks;   //number of pending tasks

    return (
        <div className={styles.statistics}>
            <h1>Task Statistics</h1>
            <div className={styles.statBox}>
                <p><strong>Total Tasks:</strong> {totalTasks}</p>
                <p><strong>Completed Tasks:</strong> {completedTasks}</p>
                <p><strong>Pending Tasks:</strong> {pendingTasks}</p>
            </div>
        </div>
    );
}