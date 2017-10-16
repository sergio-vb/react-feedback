const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//Route handler
// app.get('/', (req, res) => {
//   res.send({ hi: 'there' });
// });

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log('\naccessToken:', accessToken);
      // console.log('\nrefreshToken:', refreshToken);
      // console.log('\nprofile:', profile);
      // console.log('\ndone:', done);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    //Authenticate using google strategy
    scope: ['profile', 'email'] //Permissions that we are asking for, from a user's information - Not necessary for this app.
  })
);
app.get('/auth/google/callback', passport.authenticate('google'));

/*
Environment variables injected by Heroku.
Environment variables are variables set by 
the underlying runtime that node is running on top of
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT);
