import React, { Component } from 'react';
import styled from 'styled-components';

import WongCoNav from './Components/WongCoNav';
import Banner from './Components/Banner';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <WongCoNav />
        <Banner />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
