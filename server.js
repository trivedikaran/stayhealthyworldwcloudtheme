const express = require('express')
const app = express();
var cors = require('cors');


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var Login = require('./nodeserver/login.server');
app.use('/Login', Login);

const server = app.listen(process.env.PORT || 8080, () => {
  const host = server.address().address
  const port = server.address().port

  console.log(`Example app listening at http://${host}:${port}`)
});

module.exports = app;
