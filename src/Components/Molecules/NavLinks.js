import React, { PureComponent } from 'react';
import styled from 'styled-components';
import NavLinkItem from '../Atoms/NavLinkItem';

const StyledNavLinks = styled.ol`
  display: flex;
  flex-flow: row none;
  margin-right: 1em;

  /* Media Query for Mobile */
  @media (max-width: 576px) {
    flex-flow: column wrap;
    flex: 1 1 100%;
    display: ${props => (props.isCollapsed ? 'none' : 'block')};
    margin: 0;
  }
`;

class NavLinks extends PureComponent {
  // static prop for individual navbar item links
  static Item = props => <NavLinkItem {...props}>{props.children}</NavLinkItem>;

  render() {
    return (
      <StyledNavLinks {...this.props}>{this.props.children}</StyledNavLinks>
    );
  }
}

export default NavLinks;
