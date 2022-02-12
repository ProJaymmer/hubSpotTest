// EXPRESS SERVER SETUP
const express = require('express');
const app = express();

// Express comes with a method called .use() that allows us to execute some logic for all routes. In order to signal that the middleware is complete we call next().
app.use((req, res, next) => {
	console.log('EXECUTING FOR ALL ROUTES');
	next();
});

// IMPORT AND INITIALIZE DOTENV PACKAGE
// This tool will automatically look for a file called .env on the same level as server.js. Must create .env file. Be sure to update the .gitignore file to include .env
require('dotenv').config();

// POSTMAN SETUP
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// AFTER INSTALLING MORGAN FROM NODE, IMPORT MORGAN LOGGER--AN EXPRESS MIDDLEWARE WITH THE PURPOSE OF DEBUGGING AND BETTER LOGGING FOR CRUD REQUESTS
// TERMINAL/NODE.JS WILL DISPLAY :method :url :status :response-time ms :res[content-length]
const morgan = require('morgan');
app.use(morgan('dev'));

// IMPORT CONTROLLER FILE
const pageVisitsController = require('./controllers/pageVisits');
app.use('/hubspotapi', pageVisitsController);

// PORT STUFF
// ONCE SERVER.JS IS LIVE, 'SHOW ROUTES' WILL DISPLAY AT http://localhost:4000
const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log('👬 HubSpot server.js is listening on Port 4000');
});
