var express = require('express');

var app = express();

const PORT = process.env.PORT ||  3000;

app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else{
    next();
  }
});


app.use(express.static('public'));


app.get('/app', function (req, res) {
  res.redirect('http://www.google.com');
  //res.render('/index.html');
});


app.listen(3000, function(){
  console.log('Magic happens at 80');
});
