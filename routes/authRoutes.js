const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      //Authenticate using google strategy
      scope: ['profile', 'email'] //Permissions that we are asking for, from a user's information - Not necessary for this app.
    })
  );
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
