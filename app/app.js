 var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// require Mongoose schemas
var mongoose = require('mongoose');
require('./models/Clubs');
require('./models/Members');
require('./models/Trees');
// require('./models/Tasks');

mongoose.connect('mongodb://localhost/clubtree');

// var john = new Member(
//   {
//   firstName: "john",
//   lastName: "wicks",
//   email: "not4You@what.com",
//   clubs: []
//   });

// //   console.log (john);
// //   console.log("yo what up? Adding John in.");
// john.save();  //oh yeah, this definitely works.



var routes = require('./routes/index');
var users = require('./routes/users');

console.log("before any of that, let's try adding some content to the mongo db");
//Custom module which will help take care of what collection we insert it from
// Example demo below
var q = require("./exampleAddDocs.js");

//wait guys, we opened mongoose.connect twice. I think I might have done that.

var app = express();
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

//nvm, no problems

module.exports = app;
