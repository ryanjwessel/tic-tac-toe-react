import React from "react";
import styled from "styled-components";

const StyledLeaderboard = styled.div`
  min-width: 300px;
  width: 90vw;
  text-align: center;
  margin-bottom: 1rem;

  h2 {
    margin: 1rem 0;
  }

  .leaderboard-count-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .leaderboard-count > div:first-child {
      margin-bottom: 0.5rem;
    }
  }
`;

const Leaderboard = ({ leaderboard }) => {
  return (
    <StyledLeaderboard>
      <h2>Leaderboard</h2>
      <div className="leaderboard-count-wrapper">
        <div className="leaderboard-count">
          <div>Player 1 (O)</div>
          <div>{leaderboard[0]}</div>
        </div>
        <div className="leaderboard-count">
          <div>Draws</div>
          <div>{leaderboard[2]}</div>
        </div>
        <div className="leaderboard-count">
          <div>Player 2 (X)</div>
          <div>{leaderboard[1]}</div>
        </div>
      </div>
    </StyledLeaderboard>
  );
};

export default Leaderboard;
