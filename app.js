const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});