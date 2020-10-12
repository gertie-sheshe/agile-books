const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/test-route', function (req, res) {
  return res.send('Hello world');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, (err) => {
  err
    ? console.log('Error running server')
    : console.log('Running successfully');
});
