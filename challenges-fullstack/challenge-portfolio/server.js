const express = require('express');
const nunjucks = require('nunjucks');
const courses = require('./data');
const { indexOf } = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express:server,
  autoescape: false
});

server.get('/', function(req, res) {
  const about = {
    description: '<a href="https://rocketseat.com.br">RocketSeat</a> é uma empresa de formação de programadores web focada especialmente na "mão na massa", seu objetivo é preparar programadores para o mercado de trabalho',
    tecList: [
      { name: 'JavaScript', url: 'https://www.javascript.com' },
      { name: 'HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
      { name: 'NodeJS', url: 'https://nodejs.org/en/' },
      { name: 'React', url: 'https://pt-br.reactjs.org/' },
      { name: 'React Native', url: 'https://reactnative.dev/' }
    ],
    socialList: [
      { name: 'Github', url: 'https://github.com/Rocketseat' },
      { name: 'Instagram', url: 'https://www.instagram.com/rocketseat_oficial/?hl=pt-br' },
      { name: 'Facebook', url: 'https://www.facebook.com/rocketseat/' }
    ]
  }


  return res.render('about', { about });
});

server.get('/courses', function(req, res) {
  return res.render('courses', { courses });
});

server.get('/courses/:id', function(req, res) {
  const id = req.params.id;
  let index;

  for (let course of courses) {
    if (id === course.name)
      index = courses.indexOf(course);
  }
  
  return res.render('course', { course: courses[index] });
});

server.use(function(req, res) {
  res.status(404).render('not-found');
});

server.listen(5000, function() {
  console.log('Server is runing');
});
