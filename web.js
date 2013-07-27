process.env.PWD = process.cwd();
var fs = require('fs');
var iFile = "index.html";
var express = require('express');

var app = express.createServer(express.logger());
app.use('/js',express.static(process.env.PWD+'/js'));
app.use('/styles',express.static(process.env.PWD+'/styles'));
app.use('/images',express.static(process.env.PWD+'/images'));

app.get('/', function(request, response) {
  response.send(fs.readFileSync(iFile).toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
