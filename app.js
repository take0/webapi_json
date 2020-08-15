const express = require('express');
const { json } = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("get called.");
  // 10～20の整数
  var number = Math.floor(Math.random() * (20 - 10)) + 10;
  var entries = [];
  for (var i = 0; i < number; i++) {
    var id = Math.floor(Math.random() * (10000 - 1)) + 1;
    var score = Math.floor(Math.random() * (100 - 0));
    var entry = {};
    entry.id = id;
    entry.score = score;
    entries.push(entry);
  }
  var jsonstr = JSON.stringify(entries);
  
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.header('Access-Control-Allow-Origin', '*');
  res.send(jsonstr);
});

const portNumber = 3001;
app.listen(portNumber, () => console.log('http://localhost:' + portNumber));
