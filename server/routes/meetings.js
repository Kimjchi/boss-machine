const express = require('express');
const meetingsRouter = express.Router();

// GET array of all meetings
meetingsRouter.get('/', (req, res, next) => {

});

// POST create a new meeting and save it to the database
meetingsRouter.post('/', (req, res, next) => {

});

// DELETE all meetings from the database
meetingsRouter.delete('/', (req, res, next) => {

});

module.exports = meetingsRouter;