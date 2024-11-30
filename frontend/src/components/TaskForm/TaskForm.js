import React, { useState } from 'react';
import styles from './taskForm.module.css';

export default function TaskForm({ onAddTask }) {
    const [formData, setFormData] = useState({
        name: '',
        importance: 'LOW', // Default importance
        deadline: '',       // Empty string for no deadline initially
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.name.trim()) {
            alert('Task name is required.');
            return;
        }
        if (!formData.deadline) {
            alert('Deadline is required.');
            return;
        }

        // Optional: Validate deadline to ensure it's not a past date
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        if (formData.deadline < today) {
            alert('Deadline cannot be in the past.');
            return;
        }


        // Create the new task
        const newTask = {
            id: Date.now(), // Generate a unique ID
            name: formData.name,
            importance: formData.importance,
            deadline: formData.deadline,
            is_done: false, // Automatically set to false
        };

        onAddTask(newTask); // Callback to add the task to the list
        setFormData({ name: '', importance: 'LOW', deadline: '' }); // Reset the form
    };

    return (
        <form className={styles.TaskForm} onSubmit={handleSubmit}>
            {/* Task Name Input */}
            <div className={styles.formGroup}>
                <label htmlFor="name">Task Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter task name"
                    required
                />
            </div>

            {/* Importance Select */}
            <div className={styles.formGroup}>
                <label htmlFor="importance">Importance:</label>
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

            {/* Deadline Input */}
            <div className={styles.formGroup}>
                <label htmlFor="deadline">Deadline:</label>
                <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn}>
                Add Task
            </button>
        </form>
    );
}