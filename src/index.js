const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// Http logger
app.use(morgan('combined'));

//Templates engine
app.engine('hbs', handlebars({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'))

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/news', function (req, res) {
  res.render('news');
})

app.get('/search', function (req, res) {
  res.render('search');
})

app.post('/search', function (req, res) {
  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})