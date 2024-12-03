import React, { useEffect, useState } from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList/TaskList';
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';
import TaskEditForm from './components/TaskEditForm/TaskEditForm';
import Statistics from './Pages/Statistics/Statistics';
import FinishedTaskList from './components/FinishedTaskList/FinishedTaskList';

function App() {
  //Store and load tasks from localStorage
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  //for the edit window:
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

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

  // Toggle task status (is_done)
  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, is_done: !task.is_done } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to localStorage
      return updatedTasks;
    });
  };

  //Open edit window:
  const openEditForm = (task) => {
    setEditingTask(task);
    setIsEditing(true);
  };

  //Close edit window:
  const closeEditForm = () => {
    setIsEditing(false);
    setEditingTask(null);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    closeEditForm(); // Close the window after editing
  };

  return (
    <Router>
      <Header />
      <div className='body-container'>
        <Routes>
          {/* Main task list page */}
          <Route
            path="/"
            element={
              <>
                <div className='form-container'>
                  <TaskForm onAddTask={addTask} />
                </div>
                <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskStatus} onEdit={openEditForm} />
                <FinishedTaskList tasks={tasks} onToggle={toggleTaskStatus} />
              </>
            }
          />
          {/* Statistics page */}
          <Route path="/statistics" element={<Statistics tasks={tasks} />} />
        </Routes>

        {isEditing && (
          <TaskEditForm task={editingTask} onClose={closeEditForm} onSave={updateTask} />
        )}
      </div>
    </Router>
  );
}

export default App;
