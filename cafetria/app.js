
// import { Schema } from 'mongoose';

// import { Server } from 'net';

var express = require('express');

var path = require('path');
var flash =require('connect-flash');
var favicon = require('serve-favicon');
var logger = require('morgan');
var app = express();

app.use(express.static('public'));

var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/cafetria_db");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(flash()); 
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./models/users');
require('./models/products');
require('./models/orders');

var auth=require('./routes/auth');
var index = require('./routes/index');
var users = require('./routes/users');
var session=require('express-session');
var products = require('./routes/product');
var orders = require('./routes/orders');





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
secret:"@#%#$^$%",
cookie:{maxAge:1000*60*60*24}
}));
app.use('/', index);
app.use('/users', users);
app.use('/products', products);
app.use('/orders', orders);
app.use('/auth',auth);
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

app.listen(8080,function(){
  console.log("yalla ......")
})
module.exports = app;