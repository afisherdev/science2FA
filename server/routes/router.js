

module.exports = function(app) {
  app.get('/jeffrey', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is ABC123' });
  });
  app.get('/verify/:verID' args)
  app.post('/auth/signin', requireSignin, Authentication.signin);
  app.post('/auth/signup', Authentication.signup);
  app.get('*',  function(req, res) {
    res.sendFile('index.html', { root: '../client/build' });
});
}
