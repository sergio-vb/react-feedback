const passport = require('passport');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    //Callback to execute when authentication is successful:
    async (accessToken, refreshToken, profile, done) => {
      console.log("Passport callback started");
      try{
        const userQuery = User.findOne({ googleId: profile.id });
        const existingUser = await userQuery.exec();
        console.log("findOne Query completed, existingUser:", existingUser);
        if (existingUser) {
          done(null, existingUser);
        } else {
          //Creates a model instance and saves to database
          const user = await new User({ googleId: profile.id }).save();
          console.log("new User .save query completed");
          done(null, user);
        }
      }catch(e){
        console.log("Passport error caught:", e);
        done();
      }
    }
  )
);

//Serializes user based on their MongoDB ID
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
