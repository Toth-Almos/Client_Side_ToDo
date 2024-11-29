import React from "react";
import ImportanceText from "../ImportanceText/ImportanceText";
import styles from './taskItem.module.css';

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
    const { id, name, deadline, importance, is_done } = task;

    return (
        <div>
            <li className={styles.task}>
                <span className={styles.taskName}>{name}</span>
                <span className={styles.taskImportance}><ImportanceText importance={importance} /></span>
                <span className={styles.taskDeadline}>{deadline}</span>
                <span className={styles.taskIsDone}>{is_done ? 'Finished' : 'Pending'}</span>

                <button className={styles.taskDeleteBtn} onClick={() => onDelete(id)}>
                    Delete
                </button>
            </li>
        </div>
    );
}