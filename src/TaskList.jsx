import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTask, markAsDone }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} updateTask={updateTask} markAsDone={markAsDone} />
      ))}
    </div>
  );
};

export default TaskList;
