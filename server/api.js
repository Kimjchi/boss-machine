const express = require('express');
const ideasRouter = require('./routes/ideas');
const minionsRouter = require('./routes/minions');
const apiRouter = express.Router();

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;
