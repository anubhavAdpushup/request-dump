const express = require('express');
const path = require('path');
const logger = require('morgan');
const requestLogger = require('./middleware/requestlogger')


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', requestLogger, (req, res)=> {
  res.sendFile(path.join(__dirname, '/public/main.html'));
});

module.exports = app;
