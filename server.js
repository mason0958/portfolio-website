// BASE SETUP
// =============================================================================

// call the packages we need
var express         = require('express');
var bodyParser      = require('body-parser');
var app             = express();
var morgan          = require('morgan');

// IF YOU WANT TO USE MONGODB
// var mongodb         = require('mongodb');
// var mongoConnectUrl = "mongodb://localhost:27017/moviedb";
// var mongoClient     = mongodb.MongoClient;

// var mongoose   = require('mongoose');
// mongoose.connect('mongodb://misterMason:recrem12131@ds157298.mlab.com:57298/mongo-test'); // connect to our database
// var Bear     = require('./app/models/bear');

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port     = process.env.PORT || 3004; 
var http = require('http');
var router = express.Router();


app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
});




// REGISTER OUR ROUTES ------------------------------------------------------------------------------------
app.use('/api', router);

// START THE SERVER
// =========================================================================================================
app.listen(port);
console.log('Your not very secure server is running on: ' + port);



