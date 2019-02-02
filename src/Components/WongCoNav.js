import React, { Component } from 'react';

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink
// } from 'reactstrap';

class WongCoNav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <nav>
        <div>WongCo</div>
        <section>
          <ol>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>
        </section>
      </nav>
      //   <Nav color="light" light expand="md">
      //     <NavbarBrand href="/">WongCo</NavbarBrand>
      //     <NavbarToggler onClick={this.toggle} />
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //       <Nav className="ml-auto" navbar>
      //         <NavItem>
      //           <NavLink href="#About">About</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink href="#Portfolio">Portfolio</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink href="#Contact">Contact</NavLink>
      //         </NavItem>
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
      // </div>
    );
  }
}

export default WongCoNav;
