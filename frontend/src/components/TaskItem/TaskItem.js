import React from "react";
import ImportanceText from "../ImportanceText/ImportanceText";
import styles from './taskItem.module.css';

//Represents one Task:
export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
    const { id, name, deadline, importance, is_done } = task;

    const handleToggleStatus = () => {
        onToggle(id);   //call the toggle function passed as a prop
    }

    return (
        <div>
            <li className={`${styles.task} ${is_done ? styles.taskCompleted : ''}`}>
                <span className={`${styles.taskName} ${is_done ? styles.taskNameCompleted : ''}`}>{name}</span>
                <span className={styles.taskImportance}><ImportanceText importance={importance} /></span>
                <span className={styles.taskDeadline}>{deadline}</span>
                {/*text changes depending on Task is_done attribute:*/}
                <span className={styles.taskIsDone} onClick={handleToggleStatus}>{is_done ? 'Finished' : 'Pending'}</span>

                <button className={styles.taskEditBtn} onClick={() => onEdit(task)} disabled={is_done}>
                    Edit
                </button>

                <button className={styles.taskDeleteBtn} onClick={() => onDelete(id)} disabled={is_done}>
                    Delete
                </button>
            </li>
        </div>
    );
}