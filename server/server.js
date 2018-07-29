var express = require("express");
var eth = require("./ethereum");
console.log(eth);
console.log(express);
var app = express();
app.get("/", function(req, res) {
  console.log("The request object", req);
  console.log("The response object", res);
  eth.ethereum();
});
app.listen(8000, function() {
  console.log("listening on port 8000");
});
