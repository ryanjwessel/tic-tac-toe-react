import React from "react";
import styled from "styled-components";

/**
 * TODO: Figure out how to maintain 1:1 aspect ratio on space
 * while maintaining 3x3 grid for GameBoard.
 */
const StyledGameSpace = styled.div`
  flex: 0 0 30vw;
  height: 30vw;
  max-width: 25vh;
  outline: 1px solid black;
`;

const GameSpace = ({ selection, selectSpace }) => {
  return (
    <StyledGameSpace onClick={selectSpace}>
      {selection !== null && selection}
    </StyledGameSpace>
  );
};

export default GameSpace;
