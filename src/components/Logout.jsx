var React = require('react');
import Grid from 'react-bootstrap/lib/Grid';
import Button from 'RBS/Button';
import {Link} from 'react-router'


class Logout extends React.Component {

  render() {
    return (
      <div>
        <Grid>
          You have been logged out.
      
            <Button bsStyle="primary" href="/#/"> Login again</Button>

        </Grid>
      </div>
    )
  }

}

module.exports = Logout;
