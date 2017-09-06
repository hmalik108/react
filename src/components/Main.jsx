var React = require('react');
var Header = require('Header');
var NavigationBar = require('NavigationBar');
var AppBreadcrumbs = require('AppBreadcrumbs');
var Home = require('Home');
import {Button} from 'react-bootstrap';

var Main = (props) => {
  return (
    <div>

      <Header/>
      <NavigationBar/>
      <AppBreadcrumbs/>
       {props.children}

    </div>
  );
}

module.exports = Main;
