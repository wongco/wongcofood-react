import React from 'react';
import styled from 'styled-components';

const StyledPortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 300px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`;

const StyledDetailsTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-weight: 600;
  width: 100%;
  height: 100%;
  border-right: 2px solid lightgray;
  overflow: hidden;

  &:hover {
    background-color: steelblue;
    color: white;
  }
`;

const StyledLastDetailTab = styled(StyledDetailsTab)`
  border-right: none;
`;

const PortfolioItem = props => {
  return (
    <StyledPortfolioItem>
      <StyledDetailsTab>Link</StyledDetailsTab>
      <StyledDetailsTab>Github</StyledDetailsTab>
      <StyledLastDetailTab>About</StyledLastDetailTab>
    </StyledPortfolioItem>
  );
};

export default PortfolioItem;
