const express = require("express");
const app = express();

//Route handler
app.get("*", (req, res) => {
  res.send({ hi: "there" });
});

/*
Environment variables injected by Heroku
Environment variables are variables set by the underlying runtime that node
is running on top of
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT);
