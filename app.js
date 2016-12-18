const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('layout');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});