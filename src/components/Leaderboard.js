import React from "react";

const Leaderboard = ({ leaderboard }) => {
  return (
    <div>
      <p>
        Player 1: <span>{leaderboard[0]}</span>
      </p>
      <p>
        Ties: <span>{leaderboard[2]}</span>
      </p>
      <p>
        Player 2: <span>{leaderboard[1]}</span>
      </p>
    </div>
  );
};

export default Leaderboard;
