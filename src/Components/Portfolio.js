import React, { Component } from 'react';
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
    <StyledPortfolioContainer>
      <div>Portfolio Item</div>
      <div>Portfolio Item</div>
      <div>Portfolio Item</div>
      <div>Portfolio Item</div>
    </StyledPortfolioContainer>
  );
};

export default Portfolio;
