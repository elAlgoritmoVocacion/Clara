var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cfenv = require('cfenv');
var routes = require('./routes/index');
var users = require('./routes/users');
var watson = require('watson-developer-cloud');


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// watson api
var conn_json = {
  url: 'https://gateway.watsonplatform.net/natural-language-classifier/api',
      username: '0998028e-d33d-487d-adc5-7d48a6dd15b2',
      password: 'kdhGMt3ohs8e',
      version: 'v1'};

var nlc = new watson.natural_language_classifier(conn_json);

app.get('/classify', function(req, res, next) {
  var params = {
    classifier: '2374f9x68-nlc-10265', // from beta toolkit
    text: req.query.text
  };

  nlc.classify(params, function(err, results) {
    if (err)
      return next(err);
    else
      res.json(results);
  });
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

module.exports = app;
