const express = require('express')
const app = express();
var cons = require('consolidate');
var path = require('path');
var cors = require('cors');
var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var password = 'karan@123';
var publicIp = require('public-ip');
const bodyParser = require('body-parser');

publicExposeIp = null;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.options(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing   

var Login = require('./nodeserver/login.server');
app.use('/Login', Login);


encrypt = function (text) {
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

decrypt = function (text) {
  var decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};
app.set('view engine', 'html');
app.engine('html', cons.swig);
console.log(path.join(__dirname, '/'));
app.set('views', path.join(__dirname, '/'));
app.use(express.static(path.join(__dirname, '/')));
// app.use(express.static(path.join(config.root, '/')));

app.get('/*', function (req, res, next) {
  res.render('dist/index.html', {
    title: 'Express'
  });
});

publicIp.v4().then(ip => {
  publicExposeIp = ip;
  console.log("your public ip address", ip);
});

const server = app.listen(process.env.PORT || 8080, '0.0.0.0', () => {
  const host = server.address().address
  const port = server.address().port

  console.log(`Example app listening at http://${host}:${port}`)
});

module.exports = app;
