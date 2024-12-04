import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import styles from './finishedTaskList.module.css';

export default function FinishedTaskList({ tasks, onToggle }) {
    // Filter only the tasks that are finished
    const finishedTasks = tasks.filter(task => task.is_done);
    // Check if there are no tasks:
    if (finishedTasks.length === 0) {
        return <p className={styles.finishedTaskListEmpty}>No finished tasks available.</p>;
    }

    return (
        <div>
            <h1>Your Finished Tasks</h1>
            <ul className={styles.finishedTaskListContainer}>
                {finishedTasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={onToggle}
                        onDelete={() => { }} // Disable delete for finished tasks
                        onEdit={() => { }}   // Disable editing for finished tasks
                    />
                ))}
            </ul>
        </div>
    );
}