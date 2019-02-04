import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLinkItem from '../Molecules/NavLinkItem';

const StyledNav = styled.nav`
  display: flex;
  flex-flow: row none;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2em 2em 18em white;

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f6e6b4+0,ed9017+100;Yellow+3D+%231 */
  background: #f6e6b4; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #f6e6b4 0%,
    #ed9017 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #f6e6b4 0%,
    #ed9017 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #f6e6b4 0%,
    #ed9017 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6e6b4', endColorstr='#ed9017',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  @media (max-width: 576px) {
    flex-flow: row wrap;
  }
`;

const StyledHome = styled.p`
  font-size: 120%;
  font-weight: bold;
  margin-left: 1em;

  @media (max-width: 576px) {
    flex: 1;
    margin: 0.75em;
  }
`;

/** Component for Mobile Only Dropdown Button */
const StyledBar = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: flex;
    cursor: pointer;
    margin-right: 1em;
  }
`;

const NavLinkSection = styled.ol`
  display: flex;
  flex-flow: row none;
  margin-right: 1em;

  @media (max-width: 576px) {
    flex-flow: column wrap;
    flex: 1 1 100%;
    display: ${props => (props.isCollapsed ? 'none' : 'block')};
    margin: 0;
  }
`;

const StyledHomeLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0.75em;
  border-radius: 10%;

  @media (max-width: 576px) {
    flex: 1 1 100%;
    padding: 0.1em;
  }
`;

class Navbar extends PureComponent {
  state = {
    isCollapsed: true
  };

  /** handle collapsing of navbar in mobile view */
  handleClick = () => {
    this.setState(st => ({ isCollapsed: !st.isCollapsed }));
  };

  render() {
    return (
      <StyledNav>
        <StyledHome>
          <StyledHomeLink href="#home">WongCo</StyledHomeLink>
        </StyledHome>
        <StyledBar>
          <FontAwesomeIcon
            onClick={this.handleClick}
            icon={faBars}
            size={'2x'}
          />
        </StyledBar>
        <NavLinkSection isCollapsed={this.state.isCollapsed}>
          <NavLinkItem href="#about">About</NavLinkItem>
          <NavLinkItem href="#portfolio">Portfolio</NavLinkItem>
          <NavLinkItem href="#contact">Contact</NavLinkItem>
        </NavLinkSection>
      </StyledNav>
    );
  }
}

export default Navbar;
