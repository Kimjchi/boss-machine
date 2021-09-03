const express = require('express');
const checkMillionDollarIdea = require('../checkMillionDollarIdea');
const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../db');
const ideasRouter = express.Router();

// GET array of all ideas
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

// POST create a new idea and save it to the database
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    if (newIdea) {      
        res.status(201).send(newIdea);
    } else {
        res.status(403).send();
    }
});

// GET a single idea by id
ideasRouter.get('/:ideaId/', (req, res, next) => {
    const id = req.params.ideaId;
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        res.send(idea);
    } else {
        res.status(404).send();
    }
});

// PUT update a single idea by id
ideasRouter.put('/:ideaId/', checkMillionDollarIdea, (req, res, next) => {
    const id = req.params.ideaId;
    const newIdea = req.body;
    newIdea['id'] = id;
    const updatedIdea = updateInstanceInDatabase('ideas', newIdea);
    if (updatedIdea) {
        res.send(updatedIdea);
    } else {
        res.status(404).send();
    }
});

// DELETE a single idea by id
ideasRouter.delete('/:ideaId/', (req, res, next) => {
    const id = req.params.ideaId;
    const isDeleted = deleteFromDatabasebyId('ideas', id);
    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

module.exports = ideasRouter;