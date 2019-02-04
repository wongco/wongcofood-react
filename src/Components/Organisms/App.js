import React, { Component } from 'react';
// import styled from 'styled-components';

import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
