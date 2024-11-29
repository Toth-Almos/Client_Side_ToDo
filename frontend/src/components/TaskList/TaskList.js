import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import styles from './taskList.module.css';

export default function TaskList({ tasks, onDelete }) {
    if (tasks.length === 0) {
        return <p className={styles.tasklistEmpty}>No tasks available.</p>;
    }

    return (
        <ul className={styles.tasklistContainer}>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onDelete={onDelete} />
            ))}
        </ul>
    );
}