const express = require('express');
const ideasRouter = express.Router();

// GET array of all ideas
ideasRouter.get('/', (req, res, next) => {

});

// POST create a new idea and save it to the database
ideasRouter.post('/', (req, res, next) => {

});

// GET a single idea by id
ideasRouter.get('/:ideaId/', (req, res, next) => {

});

// PUT update a single idea by id
ideasRouter.put('/:ideaId/', (req, res, next) => {

});

// DELETE a single idea by id
ideasRouter.delete('/:ideaId/', (req, res, next) => {

});

module.exports = ideasRouter;