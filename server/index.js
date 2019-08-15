'use strict';

/* app dependencies */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const users = require('./routes/users');
const api = require('./routes/api');
const tests = require('./routes/tests');
const API_URL = process.env.ROCO_APP_API_URL || 'http://jtb-back-end.lab.regionsapps.com';
const API_PORT = process.env.ROCO_APP_API_PORT || '';

/* instantiate the app */
const app = express();
var corsOptions = {
  origin: API_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

/* allow Cross-origin requests globally */
app.use(cors(corsOptions));

/* view engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* parser setup */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/* allocate static assets */
app.use(express.static(path.join(__dirname, 'public')));

/* include routes */
app.use('/', index);
app.use('/users', users);
app.use('/tests/', tests);
app.use('/api/', api);

/* catch 404 and forward to error handler */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* error handler */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(API_PORT, function() {
  console.log('CORS-enabled web server listening on port ' + API_PORT);
});

module.exports = app;
