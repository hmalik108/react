import React from 'react'
import {Link, IndexLink} from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavigationBar from 'NavigationBar';


var Header = React.createClass({

  render: function() {
    return (
      <Navbar className="walmart-med-blue navbar-margin-bottom navbar-margin-top">
        <Navbar.Brand>
          <Link href="#">App Name</Link>
        </Navbar.Brand>
        <Nav pullRight>
        <NavItem eventKey={1} href="#">User name</NavItem>
        <NavItem eventKey={2} href="/#/logout">Logout</NavItem>

      </Nav>


      </Navbar>
    )
  }

});

module.exports = Header;
