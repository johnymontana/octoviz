var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res){
  res.send("You dawg");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("listening on " + port);
})
