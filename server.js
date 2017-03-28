const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});