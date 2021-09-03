const express = require('express');
const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../db');
const minionsRouter = express.Router();

// GET array of all minions
minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions')['data']);
});

// POST create a new minion and save it to the database
minionsRouter.post('/', (req, res, next) => {
    const minions = getAllFromDatabase('minions');
    req.body['id'] = `${minions.nextId++}`;
    const newMinion = addToDatabase('minions', req.body);
    if (newMinion) {      
        res.status(201).send(newMinion);
    } else {
        res.status(403).send();
    }
});

// GET a single minion by id
minionsRouter.get('/:minionId/', (req, res, next) => {
    const id = req.params.id;
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        res.send(minion);
    } else {
        res.status(404).send();
    }
});

// PUT update a single minion by id
minionsRouter.put('/:minionId/', (req, res, next) => {
    const id = req.params.id;
    const newMinion = req.body;
    newMinion['id'] = id;
    const updatedMinion = updateInstanceInDatabase('minions', newMinion);
    if (updatedMinion) {
        res.send(updatedMinion);
    } else {
        res.status(404).send();
    }
});

// DELETE a single minion by id
minionsRouter.delete('/:minionId/', (req, res, next) => {
    const id = req.params.id;
    const isDeleted = deleteFromDatabasebyId('minions', id);
    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

module.exports = minionsRouter;