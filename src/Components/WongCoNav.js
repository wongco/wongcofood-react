import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row none;
  justify-content: space-between;
  align-items: center;
  background-color: burlywood;
  box-shadow: 2em 2em 18em white;
`;

const StyledHome = styled.p`
  font-size: 120%;
  font-weight: bold;
  margin-left: 1em;
`;

const StyledOl = styled.ol`
  display: flex;
  flex-flow: row none;
  margin-right: 1em;
`;

const StyledLi = styled.li`
  list-style: none;
  margin-right: 1em;
  font-weight: bold;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0.75em;
  border-radius: 10%;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
class WongCoNav extends Component {
  render() {
    return (
      <StyledNav>
        <StyledHome>
          <StyledLink href="#home">WongCo</StyledLink>
        </StyledHome>
        <StyledOl>
          <StyledLi>
            <StyledLink href="#about">About</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink href="#portfolio">Portfolio</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink href="#contact">Contact</StyledLink>
          </StyledLi>
        </StyledOl>
      </StyledNav>
    );
  }
}

export default WongCoNav;
