const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, Express.'));

const portNumber = 3000;
app.listen(portNumber, () => console.log('http://localhost:' + portNumber));
