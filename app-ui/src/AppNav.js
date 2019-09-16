import React, { Component } from 'react';
import {Nav,NavItem,NavbarBrand,NavLink,Navbar} from 'reactstrap';

class AppNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">ShabdKosh</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/search">ShabdKhoj</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
         );
    }
}
 
export default AppNav;