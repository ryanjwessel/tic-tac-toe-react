import React from "react";
import styled from "styled-components";

const StyledGameSpace = styled.div`
  flex: 0 0 33%;
  min-width: 100px;
  min-height: 100px;
  height: 33%;
  outline: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

const GameSpace = ({ selection, selectSpace }) => {
  return (
    <StyledGameSpace onClick={selectSpace}>
      {selection !== null && selection}
    </StyledGameSpace>
  );
};

export default GameSpace;
