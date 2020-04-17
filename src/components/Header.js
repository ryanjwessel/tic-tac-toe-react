import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  h1 {
    margin: 1rem 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Tic Tac Toe</h1>
    </StyledHeader>
  );
};

export default Header;
