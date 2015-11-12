var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./client/static")));
// listen on 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})
