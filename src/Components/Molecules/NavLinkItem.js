import React, { PureComponent } from 'react';
import styled from 'styled-components';
import StyledLink from '../Atoms/StyledLink';

const StyledLi = styled.li`
  list-style: none;
  font-weight: bold;

  @media (max-width: 576px) {
    display: flex;
    justify-content: flex-end;
    margin: 0.5em 0;
    margin-right: 1em;
  }
`;

class NavLinkItem extends PureComponent {
  render() {
    return (
      <StyledLi>
        <StyledLink {...this.props}>{this.props.children}</StyledLink>
      </StyledLi>
    );
  }
}

export default NavLinkItem;
