import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import styles from './taskList.module.css';

//TaskList gets all the functions so it can pass them to all TaskItem component:
export default function TaskList({ tasks, onDelete, onToggle, onEdit }) {
    //Filter only the tasks that are pending:
    const activeTasks = tasks.filter(task => !task.is_done);
    //Check if there are no tasks:
    if (activeTasks.length === 0) {
        return <p className={styles.tasklistEmpty}>No tasks available.</p>;
    }

    return (
        <div>
            <h1>Your Task List</h1>
            <ul className={styles.tasklistContainer}>
                {activeTasks.map((task) => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
                ))}
            </ul>
        </div>

    );
}