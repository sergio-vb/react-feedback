const passport = require('passport');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      /* Alternative code using promises: */
      // User.findOne({ googleId: profile.id }).then(existingUser => {
      //   if (existingUser) {
      //     done(null, existingUser);
      //   } else {
      //     //Creates a model instance and saves to database
      //     new User({ googleId: profile.id })
      //       .save()
      //       .then(user => done(null, user));
      //   }
      // });
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        //Creates a model instance and saves to database
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);
