import React, { useState } from 'react';
import './app.css';
import TaskList from './components/TaskList/TaskList';
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Finish React project', deadline: '2024-12-01', importance: 'High', is_done: false },
    { id: 2, name: 'Study for exams', deadline: '2024-12-05', importance: 'Medium', is_done: true },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

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
