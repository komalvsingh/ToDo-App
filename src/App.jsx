import React, { useState } from 'react';
import styled from 'styled-components';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Search from './Search';
import "./App.css"

const Container = styled.div`

  padding: 20px;
  max-width: 600px;
  margin: auto;

  h1{
  color:white;
  font-size:45px;
  }

 
 
`;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false, lastUpdated: new Date() }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...updatedTask, id, lastUpdated: new Date() } : task));
  };

  const markAsDone = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed, lastUpdated: new Date() } : task));
  };

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="con">
    <Container>
      <div style={{textAlign:"center"}}>
      <h1>Todo App</h1>
      </div>
      <div className="">
      <Search setSearchTerm={setSearchTerm} />
      <AddTask addTask={addTask} />
      </div>
      <TaskList tasks={filteredTasks} updateTask={updateTask} markAsDone={markAsDone} />
      
    </Container>
    </div>
  );
};

export default App;
