const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const setAuthRoutes = require('./routes/authRoutes');
const setBillingRoutes = require('./routes/billingRoutes');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

/*---- Express Middleware, set up with app.use ---- */

app.use(bodyParser.json());

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

/*---- Configure back end routes (request handlers) ---- */
setAuthRoutes(app);
setBillingRoutes(app);

if (process.env.NODE_ENV === 'production'){
  //Serve production assets, like .js or .css files
  //If any unrecognized request is received, check the following path for any files that match
  app.use(express.static('client/build'));

  //Serve index.html for unrecognized routes
  const path = require('path');
  app.get('*', (req, res => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  }));
}

/*
Environment variables injected by Heroku.
Environment variables are variables set by 
the underlying runtime that node is running on top of
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT);
