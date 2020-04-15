export const mapPossibleVictories = (coordinates) => {
  // There are 8 possible victories. Three horizontal and vertical, and two diagonals.
  const rowSelections = [[], [], []];
  const colSelections = [[], [], []];
  const diagSelections = [[], []];
  coordinates.map((row) => {
    row.map((col) => {
      // Possible row victories
      rowSelections[row].push(coordinates[row][col]);
      if (row === 0) {
        // Possible column victories
        colSelections[col].push(coordinates[col][row]);
        // Possible diagonal victories
        diagSelections[0].push(coordinates[col][col]);
        diagSelections[1].push(coordinates[col][coordinates.length - 1 - col]);
      }
    });
  });

  return [...rowSelections, ...colSelections, ...diagSelections];
};

export const checkVictoryConditions = (possibleVictories) => {
  let winningPlayer;

  const isGameWon = possibleVictories.some((selections) => {
    return selections.every((coordinate) => {
      winningPlayer = SELECTION_PLAYER_MAPPING[coordinate];
      return coordinate === selections[0] && coordinate !== null;
    });
  });

  return [isGameWon, winningPlayer];
};
