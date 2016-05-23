var http = require('http'),
    express = require('express');
var app = express();

app.get('/', function(req, res){
  res.end('Hello Node World !!');
});

http.createServer(app).listen(3000);
