var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("2jllo World");
});

app.listen(3000);
