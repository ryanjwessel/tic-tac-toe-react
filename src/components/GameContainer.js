import React, { useState, useEffect } from "react";
import {
  getNewGameCoordinates,
  NEW_GAME_MOVE_COUNT,
  SELECTION_PLAYER_MAPPING,
  SELECTION,
} from "../constants/defaults";
import { getLeaderboard, saveLeaderboard } from "../utils/leaderboardUtils";
import {
  mapPossibleVictories,
  checkVictoryConditions,
} from "../utils/gameUtils";
import Leaderboard from "./Leaderboard";
import GameBoard from "./GameBoard";

const GameContainer = () => {
  // GAME STATE
  const [coordinates, setCoordinates] = useState(() => {
    const initialCoordinates = getNewGameCoordinates();
    return initialCoordinates;
  });
  const [moveCountPerPlayer, setMoveCountPerPlayer] = useState(
    NEW_GAME_MOVE_COUNT
  );

  const resetGameState = () => {
    // Reset coordinates and move counts when a game ends.
    setCoordinates(getNewGameCoordinates());
    setMoveCountPerPlayer(NEW_GAME_MOVE_COUNT);
  };

  // LEADERBOARD
  const [leaderboard, setLeaderboard] = useState(() => {
    const initialLeaderboard = getLeaderboard();
    return initialLeaderboard;
  });

  // Save Leaderboard in localStorage anytime leaderboard is updated.
  useEffect(() => {
    saveLeaderboard(leaderboard);
  }, [leaderboard]);

  // GAME LOGIC
  // Run this effect each time the move count updates to determine if the game has been won.
  useEffect(() => {
    // Only bother checking victory conditions if at least 3 moves have been made by Player 1.
    if (moveCountPerPlayer[0] >= 3) {
      const possibleVictories = mapPossibleVictories(coordinates);
      const [isGameWon, winningPlayer] = checkVictoryConditions(
        possibleVictories
      );

      const newLeaderboard = [...leaderboard];
      if (isGameWon) {
        const winningPlayerIndex = winningPlayer - 1;
        newLeaderboard[winningPlayerIndex] += 1;
        setLeaderboard(newLeaderboard);
        resetGameState();
      } else if (moveCountPerPlayer[0] === 5) {
        // Player 1 has made 5 moves without winning. Meaning, the board is filled and the game is a tie.
        newLeaderboard[2] += 1;
        setLeaderboard(newLeaderboard);
        resetGameState();
      }
    }
  }, [coordinates, moveCountPerPlayer, leaderboard]);

  const updatePlayerMoveCount = (selection) => {
    const newMoveCount = [...moveCountPerPlayer];
    newMoveCount[SELECTION_PLAYER_MAPPING[selection] - 1] += 1;
    setMoveCountPerPlayer(newMoveCount);
  };

  const handleSelection = (row, col) => {
    if (coordinates[row][col] !== null) {
      return false;
    }
    const newCoordinates = [...coordinates];
    const selection =
      moveCountPerPlayer[0] === moveCountPerPlayer[1]
        ? SELECTION.X
        : SELECTION.O;
    newCoordinates[row][col] = selection;
    setCoordinates(newCoordinates);
    updatePlayerMoveCount(selection);
  };

  return (
    <>
      <Leaderboard leaderboard={leaderboard} />
      <GameBoard coordinates={coordinates} handleSelection={handleSelection} />
    </>
  );
};

export default GameContainer;
