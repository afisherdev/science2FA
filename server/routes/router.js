module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile("index.html", { root: "..client/build" });
  });
  app.post("/2fa", function(req, res) {
    console.log("in server post", req.body);
    var data = req.body;
    return data;
  });
  app.get("*", function(req, res) {
    res.sendFile("index.html", { root: "../client/build" });
  });
};
