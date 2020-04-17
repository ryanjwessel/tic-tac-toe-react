import {
  LEADERBOARD_STORAGE_KEY,
  NEW_LEADERBOARD,
} from "../constants/defaults";

/**
 * Gets the leaderboard from localStorage, and if there isn't one it returns a NEW_LEADER_BOARD array.
 */
export const getLeaderboard = () => {
  const storedLeaderboard = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
  if (storedLeaderboard == null) {
    return NEW_LEADERBOARD;
  }
  try {
    const parsedLeaderboard = JSON.parse(storedLeaderboard);
    return parsedLeaderboard;
  } catch (err) {
    // TODO: Add graceful handling for poorly formatted leaderboard.
    return NEW_LEADERBOARD;
  }
};

/**
 * Saves the leaderboard to localStorage.
 * @param {array} leaderboard
 */
export const saveLeaderboard = (leaderboard) => {
  localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(leaderboard));
};
