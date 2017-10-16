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

//  routes router
require('./server/routes')(app);

//  Setup a default catch-all route that sends back a welcome message in JSON format
app.get('*', (request, response) => {
    response.status(200).send({
        message: "Welcome to Hello Books Library"
    });
});

module.exports = app;