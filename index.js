const express = require('express');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);

/*
Environment variables injected by Heroku.
Environment variables are variables set by 
the underlying runtime that node is running on top of
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT);
