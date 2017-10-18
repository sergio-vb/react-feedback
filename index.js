const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const setAuthRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

/*---- Middleware ---- */

//Enables cookies inside the application
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//Indicates to passport to use cookies to manage authentication
app.use(passport.initialize());
app.use(passport.session());

setAuthRoutes(app);

/*
Environment variables injected by Heroku.
Environment variables are variables set by 
the underlying runtime that node is running on top of
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT);
