var React = require('react');
import Grid from 'react-bootstrap/lib/Grid';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';

var AppBreadcrumbs = (props) => {
  return (
    <Grid>
      <Breadcrumb>
        <Breadcrumb.Item href="/#/">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
          Option 2
        </Breadcrumb.Item>
      </Breadcrumb>
    </Grid>
  )
};

module.exports = AppBreadcrumbs;
