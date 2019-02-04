import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FontAwesomeLink from '../Atoms/FontAwesomeLink';

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(205, 180, 140);
  height: 70px;
  box-sizing: border-box;
`;

class ContactBar extends PureComponent {
  static FaLink = props => <FontAwesomeLink {...props} />;

  render() {
    return (
      <StyledContactContainer {...this.props}>
        {this.props.children}
      </StyledContactContainer>
    );
  }
}

export default ContactBar;
