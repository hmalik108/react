import React from 'react'
import {Link, IndexLink} from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

var NavigationBar = React.createClass({

  render: function() {
    return (
      <Navbar>

        <Nav>
          <NavDropdown eventKey={1} title="Menu1" id="basic-nav-dropdown">
            <MenuItem eventKey={1.1}>
              <Link to="/one">One</Link>
            </MenuItem>
            <MenuItem eventKey={1.2}>
              <Link to="/">Two</Link>
            </MenuItem>
            <MenuItem eventKey={1.3}>
              <Link to="/">Three</Link>
            </MenuItem>
          </NavDropdown>
          <NavItem eventKey={2} href="#">
            About
          </NavItem>
          <NavItem eventKey={3} href="#">Contact Us</NavItem>
        </Nav>
      </Navbar>
    )
  }

});

module.exports = NavigationBar;
