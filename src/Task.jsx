import React, { useState } from 'react';
import styled from 'styled-components';
import ExpandableTask from './ExpandableTask';

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${props => props.completed ? '#d3ffd3' : '#fff'};
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
 background-color: rgb(206, 198, 243);
 border-radius: 10px;
 padding: 15px;
 margin-top:5px;

 &:hover{
  background-color: rgb(189, 175, 250);
 }

 input{
 border-radius:7px;
 border:none;
 padding: 5px;
 width:300px;
 }
`;

const Title = styled.span`
  flex: 1;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`;

const Button = styled.button`
  margin-left: 10px;
`;

const Task = ({ task, updateTask, markAsDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleUpdate = () => {
    updateTask(task.id, { ...task, title: newTitle });
    setIsEditing(false);
  };

  return (
    <div>
      <TaskItem completed={task.completed}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </>
        ) : (
          <>
            <Title completed={task.completed}>{task.title}</Title>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button onClick={() => markAsDone(task.id)}>
              {task.completed ? 'Undo' : 'Done'}
            </Button>
          </>
        )}
      </TaskItem>
      <ExpandableTask task={task} />
    </div>
  );
};

export default Task;
