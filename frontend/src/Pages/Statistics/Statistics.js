import React, { useState } from 'react';
import styles from './statistics.module.css';

export default function Statistics({ tasks }) {
    //Helper function to parse the date string into a Date object:
    const parseDate = (dateString) => (dateString ? new Date(dateString) : null);

    //Group tasks by year, month, or day:
    const groupTasksByDate = (tasks, granularity) => {
        return tasks.reduce((acc, task) => {
            const date = parseDate(task.deadline);
            if (!date) return acc;

            //Set key as a unique identifier for each group by granularity:
            let key;
            switch (granularity) {
                case 'year':
                    key = date.getFullYear(); //Format: YYYY
                    break;
                case 'month':
                    key = `${date.getFullYear()}-${date.getMonth() + 1}`; //Format: YYYY-MM
                    break;
                case 'day':
                    key = date.toISOString().split('T')[0]; // Format:YYYY-MM-DD
                    break;
                default:
                    key = 'unknown';
            }

            //create key attribute if it doesn't already exists:
            if (!acc[key]) acc[key] = [];
            //Add task for the specific key:
            acc[key].push(task);

            return acc;
        }, {});
    };

    //Calculate statistics for a specific group of tasks:
    const calculateStats = (tasks) => {
        const total = tasks.length;
        const completed = tasks.filter((task) => task.is_done).length;
        const pending = total - completed;
        return { total, completed, pending };
    };

    //State to manage the granularity view (overall, yearly, monthly, or daily):
    const [granularity, setGranularity] = useState('overall');

    //Grouped tasks based on the selected granularity:
    const groupedTasks = granularity === 'overall' ? { Overall: tasks } : groupTasksByDate(tasks, granularity);

    return (
        <div className={styles.statistics}>
            <h1>Task Statistics</h1>

            {/* Granularity Selector */}
            <div className={styles.granularitySelector}>
                <button
                    onClick={() => setGranularity('overall')}
                    className={granularity === 'overall' ? styles.active : ''}>
                    Overall
                </button>
                <button
                    onClick={() => setGranularity('year')}
                    className={granularity === 'year' ? styles.active : ''}>
                    Yearly
                </button>
                <button
                    onClick={() => setGranularity('month')}
                    className={granularity === 'month' ? styles.active : ''}>
                    Monthly
                </button>
                <button
                    onClick={() => setGranularity('day')}
                    className={granularity === 'day' ? styles.active : ''}>
                    Daily
                </button>
            </div>

            {/* Statistics Display */}
            <div className={styles.statsDisplay}>
                {/*Get a [key, tasks] pair for every group:*/}
                {Object.entries(groupedTasks).map(([key, tasks]) => {
                    const { total, completed, pending } = calculateStats(tasks);
                    return (
                        <div key={key} className={styles.statBox}>
                            <h3>
                                {key === 'Overall'
                                    ? 'Overall Statistics'
                                    : granularity === 'year'
                                        ? `Year: ${key}`
                                        : granularity === 'month'
                                            ? `Month: ${key}`
                                            : `Date: ${key}`}
                            </h3>
                            <p><strong>Total Tasks:</strong> {total}</p>
                            <p><strong>Completed Tasks:</strong> {completed}</p>
                            <p><strong>Pending Tasks:</strong> {pending}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}