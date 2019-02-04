import React from 'react';
import FooterButton from '../Atoms/FooterButton';

const FooterButtonLink = props => {
  return (
    <a href={props.href}>
      <FooterButton {...props}>{props.children}</FooterButton>
    </a>
  );
};

export default FooterButtonLink;
