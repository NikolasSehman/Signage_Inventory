var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

const db = mysql.createConnection ({
  host: 'cleanearthsoftware.com',
  port: '3306',
  user: 'cims_user2234',
  password: 'CSC4610-01',
  database: '4236paulgarlandclean_cims2'
});

// connect to database
// db.connect((err) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
//   console.log('Connected to database');
// });
//console.log("OUtside test:")
//console.log(db)
global.db = db;
global.db_connected = false

var indexRouter = require('./routes/index');
// var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
