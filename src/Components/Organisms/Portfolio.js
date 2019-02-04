import React from 'react';
import styled from 'styled-components';

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #6c757d;
  height: 200px;
`;

const Portfolio = () => {
  return (
    <StyledPortfolioContainer id="portfolio">
      <div>Memory Game</div>
      <div>Meme Generator</div>
      <div>Hack or Snooze</div>
      <div>Jobly</div>
      <div>Warbler</div>
      <div>MicroBlog</div>
    </StyledPortfolioContainer>
  );
};

export default Portfolio;
