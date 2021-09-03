const express = require('express');
const minionsRouter = express.Router();

// GET array of all minions
minionsRouter.get('/', (req, res, next) => {

});

// POST create a new minion and save it to the database
minionsRouter.post('/', (req, res, next) => {

});

// GET a single minion by id
minionsRouter.get('/:minionId/', (req, res, next) => {

});

// PUT update a single minion by id
minionsRouter.put('/:minionId/', (req, res, next) => {

});

// DELETE a single minion by id
minionsRouter.delete('/:minionId/', (req, res, next) => {

});

module.exports = minionsRouter;