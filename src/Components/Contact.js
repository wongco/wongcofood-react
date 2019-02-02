import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(205, 180, 140);
  height: 70px;
  box-sizing: border-box;
`;

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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 0 15px;
  color: #343a40;
  &:hover {
    color: gray;
  }
`;

const Contact = () => {
  return (
    <StyledContactContainer>
      <StyledFontAwesomeIcon icon={faCoffee} size={'2x'} />
      <a href="mailto:gin+hello@wongcofood.com">
        <StyledFontAwesomeIcon icon={faEnvelope} size={'2x'} />
      </a>
      <a href="https://wongco.github.io/wongcoblog/">
        <StyledFontAwesomeIcon icon={faPenSquare} size={'2x'} />
      </a>
      <a href="https://github.com/wongco">
        <StyledFontAwesomeIcon icon={faGithub} size={'2x'} />
      </a>
      <a href="https://www.linkedin.com/in/ginson">
        <StyledFontAwesomeIcon icon={faLinkedin} size={'2x'} />
      </a>
      <a href="resume.pdf">
        <StyledButton type="button">Resume</StyledButton>
      </a>
    </StyledContactContainer>
  );
};

export default Contact;
