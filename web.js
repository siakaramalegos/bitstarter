var express = require('express');

var app = express.createServer(express.logger());
//var buffer= new buffer();
//var fs=require('fs');
//var buffer=fs.readFileSync('index.html', 'utf8');

app.get('/', function(request, response) {
  var buffer= new buffer();
  var fs=require('fs');
  response.send(buffer.toString('utc 8', fs.readFileSync("index.html")));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
