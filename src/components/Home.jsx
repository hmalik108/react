var React = require('react');
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';



var Home = React.createClass({

  render: function() {
    return (
      <div>
          <Grid>
            <h1>Welcome to my APp</h1>
            <p>This will contain the information </p>
          </Grid>

      </div>



    )
  }

});


module.exports = Home;
