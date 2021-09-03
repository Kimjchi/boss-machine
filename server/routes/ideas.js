const express = require('express');
const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../db');
const ideasRouter = express.Router();

// GET array of all ideas
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas')['data']);
});

// POST create a new idea and save it to the database
ideasRouter.post('/', (req, res, next) => {
    const ideas = getAllFromDatabase('ideas');
    req.body['id'] = `${ideas.nextId++}`;
    const newIdea = addToDatabase('ideas', req.body);
    if (newIdea) {      
        res.status(201).send(newIdea);
    } else {
        res.status(403).send();
    }
});

// GET a single idea by id
ideasRouter.get('/:ideaId/', (req, res, next) => {
    const id = req.params.id;
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        res.send(idea);
    } else {
        res.status(404).send();
    }
});

// PUT update a single idea by id
ideasRouter.put('/:ideaId/', (req, res, next) => {
    const id = req.params.id;
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
    const id = req.params.id;
    const isDeleted = deleteFromDatabasebyId('ideas', id);
    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

module.exports = ideasRouter;