import React from "react";
import styled from "styled-components";
import GameSpace from "./GameSpace";
import { SELECTION } from "../constants/defaults";

const StyledGameBoard = styled.div`
  min-width: 300px;
  min-height: 300px;
  width: 90vw;
  height: 90vw;
  max-width: 75vh;
  max-height: 75vh;
  display: flex;
  flex-wrap: wrap;
`;

const GameBoard = ({ coordinates, handleSelection }) => {
  const selectSpace = (row, col) => {
    // Figure out how to determine who's turn it is.
    handleSelection(row, col, SELECTION.X);
  };

  return (
    <StyledGameBoard>
      {coordinates.map((rowArr, row) =>
        rowArr.map((spaceValue, col) => (
          <GameSpace
            key={`${row}-${col}`}
            selection={spaceValue}
            selectSpace={() => selectSpace(row, col)}
          />
        ))
      )}
    </StyledGameBoard>
  );
};

export default GameBoard;
