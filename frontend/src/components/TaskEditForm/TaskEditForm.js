import React, { useState } from "react";
import styles from './taskEditForm.module.css';

export default function TaskEditModal({ task, onClose, onSave }) {
    const [formData, setFormData] = useState({ ...task });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSave(formData);
    };

    return (
        <div className={styles.editFormOverlay}>
            <div className={styles.editFormContent}>
                <h2>Edit Task</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="importance">Importance: </label>
                    <select
                        id="importance"
                        name="importance"
                        value={formData.importance}
                        onChange={handleChange}
                    >
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="deadline">Deadline: </label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.editFormActions}>
                    <button onClick={handleSave} className={styles.saveBtn}>
                        Save
                    </button>
                    <button onClick={onClose} className={styles.closeBtn}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}