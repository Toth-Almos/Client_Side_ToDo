import React, { useEffect, useState } from 'react';
import './app.css';
import TaskList from './components/TaskList/TaskList';
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  //Store and load tasks from localStorage
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  //Save tasks to localStorage whenever tasks change:
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  //Delete a task by id:
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  //Add a new task:
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />
      <div className='body-container'>
        <div className='form-container'>
          <TaskForm onAddTask={addTask} />
        </div>
        <h1>Task List</h1>
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
    </>
  );
}

export default App;
