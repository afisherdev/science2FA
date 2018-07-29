const twofactor = require("../ethereum");
module.exports = function(app) {
  app.get("/", function(req, res) {});
  app.post("/2fa", function(req, res) {
    console.log("in server post", req.body.data);
    var data = req.body;
    console.log(data);
    twofactor.ethereum(data);
  });
  app.get("*", function(req, res) {});
};
