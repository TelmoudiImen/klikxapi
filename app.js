var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/klikx');
app.use('/', require('./routes/index'));
app.use('/parametres', require('./routes/parametres'));
app.use('/duplicatas', require('./routes/duplicatas'));
app.use('/fiches', require('./routes/fiches'));
app.use('/clotures', require('./routes/clotures'));
app.use('/gtts', require('./routes/gtts'));
app.use('/tickets', require('./routes/tickets'));
app.use('/familles', require('./routes/familles'));
app.use('/imprimantes', require('./routes/imprimantes'));
app.use('/tvas', require('./routes/tvas'));
app.use('/pistes_audits', require('./routes/pistes_audits'));
app.use('/messages', require('./routes/messages'));
app.use('/articles', require('./routes/articles'));
app.use('/modes_paiements', require('./routes/modes_paiements'));
app.use('/vendeurs', require('./routes/vendeurs'));
app.use('/caisses', require('./routes/caisses'));

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
  res.json({error: err.message});
});

module.exports = app;
