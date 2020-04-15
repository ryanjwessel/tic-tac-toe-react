import { LEADERBOARD_STORAGE_KEY } from "../constants/game";

export const getLeaderboard = () => {
  const storedLeaderboard = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
  if (storedLeaderboard == null) {
    return NEW_LEADERBOARD;
  }
  return JSON.parse(storedLeaderboard);
};

export const saveLeaderboard = (leaderboard) => {
  localStorage.setItem(JSON.stringify(leaderboard));
};
