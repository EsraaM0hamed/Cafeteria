
var express = require('express');
var path = require('path');
var flash =require('connect-flash');
var favicon = require('serve-favicon');
var logger = require('morgan');
var app = express();
var mongoose=require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session=require('express-session');
var flash=require('connect-flash');


mongoose.connect("mongodb://localhost:27017/cafetria_db");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(express.static('public'));
//app.use(flash());


require('./models/products');
require('./models/users');
require('./models/orders');


var index = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/product');
var users = require('./routes/users');
var auth=require('./routes/auth');
var checks=require('./routes/checks');
var orders=require('./routes/orders');


app.use(flash());

app.use(session({
      secret:"@#%#$^$%",
      cookie:{maxAge:1000*60*60*24}
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use\on(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', index);
app.use('/users', users);
app.use('/products', products);
app.use('/auth',auth);
app.use('/checks',checks);
//app.use('/orders',orders);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
