//importando dependencias
const express = require('express'); //a variavel se torna uma função
const nunjucks = require('nunjucks');
const routes = require('./routes');

//criando um servidor (executa o express)
const server = express();

//configurando o estilo
server.use(express.static('public'));
server.use(routes);

//configurando a template engine
server.set('view engine', 'njk');

//configurando o nunjucks para a template engine
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});


//iniciar servidor
server.listen(5000, function() {
  console.log('server is running');
});