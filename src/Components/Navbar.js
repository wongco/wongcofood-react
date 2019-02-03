import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

const StyledOl = styled.ol`
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

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0.75em;
  border-radius: 10%;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 576px) {
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
        <StyledOl isCollapsed={this.state.isCollapsed}>
          <StyledLi>
            <StyledLink href="#about">About</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink href="#portfolio">Portfolio</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink href="#contact">Contact</StyledLink>
          </StyledLi>
        </StyledOl>
      </StyledNav>
    );
  }
}

export default Navbar;
