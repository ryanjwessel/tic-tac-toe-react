import React, { useState, useEffect } from "react";
import {
  NEW_LEADERBOARD,
  NEW_GAME_COORDINATES,
  NEW_GAME_MOVE_COUNT,
  SELECTION_PLAYER_MAPPING,
} from "../constants/game";
import { getLeaderboard, saveLeaderboard } from "../utils/leaderboard";
import { mapPossibleVictories } from "../utils/gameService";

const GameContainer = () => {
  // GAME STATE
  const [coordinates, setCoordinates] = useState(NEW_GAME_COORDINATES);
  const [moveCountPerPlayer, setMoveCountPerPlayer] = useState(
    NEW_GAME_MOVE_COUNT
  );

  // LEADERBOARD
  const [leaderboard, setLeaderboard] = useState(NEW_LEADERBOARD);
  // Get the latest leaderboard from localStorage on initial mount of component.
  useEffect(() => {
    setLeaderboard(getLeaderboard());
  }, []);
  // Save Leaderboard in localStorage anytime leaderboard is updated.
  useEffect(() => {
    saveLeaderboard(leaderboard);
    // Reset coordinates and move counts when a game ends.
    setCoordinates(NEW_GAME_COORDINATES);
    setMoveCountPerPlayer(NEW_GAME_MOVE_COUNT);
  }, [leaderboard[0], leaderboard[1], leaderboard[2]]);

  // GAME LOGIC
  // Run this effect each time the move count updates to determine if the game has been won.
  useEffect(() => {
    // Only bother checking victory conditions if at least 3 moves have been made by Player 1.
    if (moveCountPerPlayer[0] > 3) {
      const possibleVictories = mapPossibleVictories(coordinates);
      const [isGameWon, winningPlayer] = checkVictoryConditions(
        possibleVictories
      );

      const newLeaderboard = [...leaderboard];
      if (isGameWon) {
        const winningPlayerIndex = winningPlayer - 1;
        newLeaderboard[winningPlayerIndex] += 1;
        setLeaderboard(newLeaderboard);
      } else if (moveCountPerPlayer[0] === 5) {
        // Player 1 has made 5 moves without winning. Meaning, the board is filled and the game is a tie.
        newLeaderboard[2] += 1;
        setLeaderboard(newLeaderboard);
      }
    }
  }, [moveCountPerPlayer[0], moveCountPerPlayer[1]]);

  const updatePlayerMoveCount = (selection) => {
    const newMoveCount = [...moveCountPerPlayer];
    newMoveCount[SELECTION_PLAYER_MAPPING[selection]] += 1;
    setMoveCountPerPlayer(newMoveCount);
  };

  const handleSelection = (row, col, selection) => {
    if (coordinates[row][col] !== null) {
      return false;
    }
    const newCoordinates = [...coordinates];
    newCoordinates[row][col] = selection;
    setCoordinates(newCoordinates);
    updatePlayerMoveCount(selection);
  };

  return <div />;
};

export default GameContainer;
