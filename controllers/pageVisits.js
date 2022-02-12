// Express Router is a tool that allows us to abstract away our routes in to a separate file.
const express = require('express');
const router = express.Router();

// BODY PARSER
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// require API_helper.js
const apiHelper = require('../API_helper');

// ADD CONTROLLERS/ROUTES
// router.get WILL DEFAULT TO READING YOUR LOCAL HOST PORT

// 'READ' CONTROLLERS/ROUTES
router.get('/', (req, res) => {
	console.log('Reading All HubSpot Data');
	apiHelper
		.make_API_call(
			'https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=430609945ebc2eae1deb5e29465a'
		)
		.then((response) => {
			res.json(response.events);
		})
		.catch((error) => {
			res.send(error);
		});
});

module.exports = router;
