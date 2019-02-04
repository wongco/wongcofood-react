import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Link from '../Atoms/Link';

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
        <Link {...this.props}>{this.props.children}</Link>
      </StyledLi>
    );
  }
}

export default NavLinkItem;
