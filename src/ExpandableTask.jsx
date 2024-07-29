import React, { useState } from 'react';
import styled from 'styled-components';

const ExpandableContainer = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ExpandableTask = ({ task }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      {expanded && (
        <ExpandableContainer>
          <p>Description: {task.title}</p>
          <p>Last Updated: {task.lastUpdated.toLocaleString()}</p>
        </ExpandableContainer>
      )}
    </div>
  );
};

export default ExpandableTask;
