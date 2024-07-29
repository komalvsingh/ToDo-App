import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
   border:3px solid rgb(255, 204, 0);
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
 border-radius: 10px;
 color: white;
 background-color:rgb(255, 204, 0) ;
 width: 90px;
 font-size: 15px;

 &:hover{
 background-color:rgb(229, 184, 1) ;
 }
`;

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask({ title });
      setTitle('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default AddTask;
