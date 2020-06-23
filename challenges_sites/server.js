const express = require('express');

const server = express();

server.get('/', function(req, res) {
  return res.render('challenge-2-3');
});

server.listen(5000, function() {
  console.log('server is running');
});

