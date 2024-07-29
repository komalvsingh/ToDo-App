import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
   border:3px solid rgb(255, 204, 0);
  border-radius: 10px;
`;

const Search = ({ setSearchTerm }) => {
  return (
    <Input
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
