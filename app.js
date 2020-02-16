var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("2jello World");
});

app.listen(3000);
