import React from "react";
import "./App.css";
import StyledApp from "./StyledApp";
import GlobalStyle from "./styles/GlobalStyle";
import GameContainer from "./components/GameContainer";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      <GameContainer />
    </StyledApp>
  );
}

export default App;
