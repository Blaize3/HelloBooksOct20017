/*eslint-disable*/

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

//  set up the express application 
const app = express();

//  log requests to the console
app.use(logger('dev'));

//  Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//  Setup a default catch-all route that sends back a welcome message in JSON format
app.get('*', (request, response) => {
    res.status(200).send({
        message: "Welcome to Hello Books Library"
    });
});

module.exports = app;