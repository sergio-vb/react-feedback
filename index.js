const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

//Route handler
// app.get("/", (req, res) => {
//   res.send({ hi: "there" });
// });

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret
  })
);

/*
Environment variables injected by Heroku
Environment variables are variables set by the underlying runtime that node
is running on top of
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT);
