var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("2Hello World");
});

app.listen(3000);
