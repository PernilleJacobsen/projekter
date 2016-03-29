var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var redis = require('redis');

// connect to remote Redis db
var client = redis.createClient(16419, 'pub-redis-16419.us-east-1-4.2.ec2.garantiadata.com', {no_ready_check: true});
client.auth('password123', function (err) {
  if (err) {
    console.log(err);
  }
});

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//enable session
app.use(session({
  secret: 'hasfkhsakfjdhsa',
  store: new RedisStore({
    host: 'pub-redis-17549.us-east-1-1.2.ec2.garantiadata.com',
    port: 17549,
    client: client
  }),
  saveUninitialized: false,
  resave: false,
  cookie: {maxAge: 60 * 1000}
}));


app.use('/', routes);
//app.use('/users', users);
app.use('/session', session);

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


module.exports = app;
