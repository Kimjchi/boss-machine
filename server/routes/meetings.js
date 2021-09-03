const express = require('express');
const { createMeeting, getAllFromDatabase, deleteAllFromDatabase, addToDatabase } = require('../db');
const meetingsRouter = express.Router();

// GET array of all meetings
meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

// POST create a new meeting and save it to the database
meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    addToDatabase('meetings', newMeeting);
    res.status(201).send(newMeeting);
});

// DELETE all meetings from the database
meetingsRouter.delete('/', (req, res, next) => {
    const newModel = deleteAllFromDatabase('meetings');
    res.status(204).send();
});

module.exports = meetingsRouter;