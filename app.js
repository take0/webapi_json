const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send('{"id":"12345678","score":100}');
});

const portNumber = 3001;
app.listen(portNumber, () => console.log('http://localhost:' + portNumber));
