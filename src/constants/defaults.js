export const SELECTION = {
  X: "X",
  O: "O",
};

export const SELECTION_PLAYER_MAPPING = {
  [SELECTION.X]: 1,
  [SELECTION.O]: 2,
};

/**
 * Game coordinates are a two-dimensional array consisting of 3 rows and 3 columns.
 * Each coordinate represents the current selection for that space, which could be one of the
 * following values: null | SELECTION.X | SELECTION.O
 */
export const getNewGameCoordinates = () =>
  Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null));

/**
 * Move count is a tuple that tracks the total number of moves per player.
 * The player is equal to the array index + 1, so index 0 tracks Player 1's move count.
 */
export const NEW_GAME_MOVE_COUNT = [0, 0];

/**
 * Leaderboard is a tuple that tracks the total number of wins per player.
 * The player is equal to the array index + 1, so index 0 tracks Player 1's win count.
 * In the case of a tie, index 2 is incremented.
 */
export const NEW_LEADERBOARD = [0, 0, 0];
export const LEADERBOARD_STORAGE_KEY = "ttt_leaderboard";
