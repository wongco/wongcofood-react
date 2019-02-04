import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 0 15px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #343a40;
  color: white;

  &:hover {
    background-color: gray;
  }
`;

const FooterButton = props => {
  return (
    <StyledButton type="button" {...props}>
      {props.children}
    </StyledButton>
  );
};

export default FooterButton;
