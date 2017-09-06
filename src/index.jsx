var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
import Logout from 'Logout';
import Home from 'Home';
import Bootstrap from 'bootstrap.css'
import css from 'style-loader!css-loader!less-loader!applicationStyles'



ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path="/" component={Main}>

        <Route path="logout" component={Logout}/>
        <IndexRoute component={Home}/>
  </Route>
  </Router>,
  document.getElementById('app')
);
