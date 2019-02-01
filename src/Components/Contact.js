import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faEnvelope,
  faPenSquare
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(205, 180, 140);
`;

const Contact = () => {
  return (
    <StyledContactContainer>
      <FontAwesomeIcon icon={faCoffee} size={'2x'} />
      <FontAwesomeIcon icon={faEnvelope} size={'2x'} />
      <FontAwesomeIcon icon={faPenSquare} size={'2x'} />
      <FontAwesomeIcon icon={faLinkedin} size={'2x'} />
      <FontAwesomeIcon icon={faGithub} size={'2x'} />
      {/* <div
        class="container-fluid contact text-center contact__background-color py-3"
        id="contact"
      >
        <div class="row justify-content-center d-flex align-items-center">
          <div>
            <a href="mailto:gin@wongcofood.com">
              <i class="px-3 far fa-envelope fa-2x" />
            </a>
          </div>
          <div>
            <a href="https://wongco.github.io/wongcoblog/">
              <i class="px-3 fas fa-pen-square fa-2x" />
            </a>
          </div>
          <div>
            <a href="https://github.com/wongco">
              <i class="px-3 fab fa-github fa-2x" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ginson-wong-92610358">
              <i class="px-3 fab fa-linkedin fa-2x" />
            </a>
          </div>
          <div>
            <a
              href="resume.pdf"
              class="ml-2 py-auto btn text-white button--contact"
            >
              Resume
            </a>
          </div>
        </div>
      </div> */}
    </StyledContactContainer>
  );
};

export default Contact;
