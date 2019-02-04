import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 0 15px;
  color: #343a40;
  &:hover {
    color: gray;
  }
`;

const FontAwesomeLink = props => {
  return (
    <a href={props.href}>
      <StyledFontAwesomeIcon icon={props.icon} size={'2x'} />
    </a>
  );
};

export default FontAwesomeLink;
