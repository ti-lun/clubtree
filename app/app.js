var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// require Mongoose schemas
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//assert.equal(query.exec().constructor, global.Promise);

require('./models');

mongoose.connect('mongodb://clubtree:cttest@ds137271.mlab.com:37271/clubtree_dev');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var routes = require('./routes');

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

module.exports = app;