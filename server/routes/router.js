module.exports = function(app) {
  app.get("/verify/:verID");

  app.get("*", function(req, res) {
    res.sendFile("index.html", { root: "../client/build" });
  });
};
