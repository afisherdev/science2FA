module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile("index.html", { root: "..client/build" });
  });
  app.get("*", function(req, res) {
    res.sendFile("index.html", { root: "../client/build" });
  });
};
