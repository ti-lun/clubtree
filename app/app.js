var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
require('./models/Clubs');
require('./models/Members');
// require('./models/Hierarchy');
require('./models/Tasks');


var routes = require('./routes/index');
var users = require('./routes/users');



console.log("before any of that shiet, let's try adding some content to the mongo db");


mongoose.connect('mongodb://localhost/clubtree');

var MongoClient = require('mongodb').MongoClient,
  test = require('assert');

MongoClient.connect('mongodb://localhost:27017', function(err, db) {
  var collection = db.collection("ehhhhhhhhhh");
  // Insert a single document
  collection.insertOne({saveMe:' it work'});

 
 

  console.log("\nSAVE ME\n");
  if (err) throw err;

  console.log("My new Hierarchy is saved",
    "`save` hook worked as espected since we had no errors here");
  

  // console.log(collection.findOne({SWEET:'IT WORKS'}));


  //THIS DOESN'T NECESSARILY WORKS
  // Wait for a second before finishing up, to ensure we have written the item to disk
  // setTimeout(function() {

    // Fetch the document
    collection.findOne({hello:'world_no_safe'}, function(err, item) {
      test.equal(null, err);
      test.equal('world_no_safe', item.hello);
      db.close();
    })
  }, 100); 


var app = express();
console.log("1");
// view engine setup
app.set('views', path.join(__dirname, '../public/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

console.log("2");


app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log("404 error");

  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log("500 error");

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("MADE IT DOWN HERE");

module.exports = app;
