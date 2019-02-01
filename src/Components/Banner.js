import React, { Component } from 'react';
import bannerImage from '../pics/baybridge_banner.png';
import styled from 'styled-components';

const StyledBanner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600px;
  color: white;
  width: 100%;
  background-image: url(${bannerImage});
  height: 607px;
`;

const BannerQuoteContainer = styled.div`
  font-size: 150%;
  font-weight: 800;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px 50px;
  border-radius: 10px;
  min-width: 200px;
  max-width: 400px;
`;

class Banner extends Component {
  render() {
    return (
      <StyledBanner>
        <BannerQuoteContainer>WongCo</BannerQuoteContainer>
      </StyledBanner>
    );
  }
}

export default Banner;
