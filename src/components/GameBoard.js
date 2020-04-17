import React from "react";
import styled from "styled-components";
import GameSpace from "./GameSpace";

const StyledGameBoard = styled.div`
  position: relative;
  min-width: 300px;
  min-height: 300px;
  width: 90vw;
  height: 90vw;
  max-width: 75vh;
  max-height: 75vh;
  display: flex;
  flex-wrap: wrap;
`;

const StyledResultModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 150px;
  min-width: 150px;
  width: 30vw;
  max-width: 300px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 0.5rem;
  z-index: 100;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  > * {
    margin: 0.5rem 0;
  }
`;

const GameBoard = ({ coordinates, handleSelection, isGameOver, winner }) => {
  const selectSpace = (row, col) => {
    // Figure out how to determine who's turn it is.
    handleSelection(row, col);
  };

  const getGameResult = () => {
    if (winner === null) {
      return "It's a tie!";
    } else {
      return `Player ${winner} won!`;
    }
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
      {isGameOver && (
        <StyledResultModal>
          <p>GAME OVER</p>
          <p>{getGameResult()}</p>
          <button type="button">Play Again?</button>
        </StyledResultModal>
      )}
    </StyledGameBoard>
  );
};

export default GameBoard;
