const express = require('express');
const { json } = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("get called.");

  var jsonstr = (new Entries()).toString();
  console.log("jsonstr : " + jsonstr);
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.header('Access-Control-Allow-Origin', '*');
  res.send(jsonstr);
});

const portNumber = 3001;
app.listen(portNumber, () => console.log('http://localhost:' + portNumber));

// class Entries
// 
// インスタンスを生成すると、10～20個の要素を持つリストが作られる。
// 要素は {id=string, score=number} の形をしている。
//
// create() が実際に要素を作っているメソッド。
// toString() で JSON文字列形式でリストを取り出せる。
class Entries {
  constructor() {
    this.entries = [];
    this.create();
  }

  create() {
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
    this.entries = entries;
  }

  toString() {
    var str = JSON.stringify(this.entries);
    return str;
  }
}