import React from 'react';
import styled from 'styled-components';
import { faCoffee, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import FaLink from '../Atoms/FontAwesomeLink';
import FooterButtonLink from '../Molecules/FooterButtonLink';

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(205, 180, 140);
  height: 70px;
  box-sizing: border-box;
`;

const Contact = () => {
  return (
    <StyledContactContainer id="contact">
      <FaLink icon={faCoffee} />
      <FaLink icon={faEnvelope} href="mailto:gin+hello@wongcofood.com" />
      <FaLink icon={faPenSquare} href="https://wongco.github.io/wongcoblog/" />
      <FaLink icon={faGithub} href="https://github.com/wongco" />
      <FaLink icon={faLinkedin} href="https://www.linkedin.com/in/ginson" />
      <FooterButtonLink href="resume.pdf">Resume</FooterButtonLink>
    </StyledContactContainer>
  );
};

export default Contact;
