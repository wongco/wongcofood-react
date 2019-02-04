import React from 'react';
import { faCoffee, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ContactBar from '../Molecules/ContactBar';
import FooterButtonLink from '../Molecules/FooterButtonLink';

const Contact = () => {
  return (
    <ContactBar id="contact">
      <ContactBar.FaLink icon={faCoffee} />
      <ContactBar.FaLink
        icon={faEnvelope}
        href="mailto:gin+hello@wongcofood.com"
      />
      <ContactBar.FaLink
        icon={faPenSquare}
        href="https://wongco.github.io/wongcoblog/"
      />
      <ContactBar.FaLink icon={faGithub} href="https://github.com/wongco" />
      <ContactBar.FaLink
        icon={faLinkedin}
        href="https://www.linkedin.com/in/ginson"
      />
      <FooterButtonLink href="resume.pdf">Resume</FooterButtonLink>
    </ContactBar>
  );
};

export default Contact;
