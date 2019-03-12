const express = require('express');

const businessRouter = require('../helpers/business/businessRouter');
const foodRouter = require('../helpers/food/foodRouter');
const volunteerRouter = require('../helpers/volunteers/volunteerRouter');
const pantryRouter = require('../helpers/pantry/pantryRouter');
const transfersRouter = require('../helpers/transfers/transfersRouter');

const server = express();

server.use(express.json());

server.use('/api/business', businessRouter);
server.use('/api/food', foodRouter);
server.use('/api/pantry', pantryRouter);
server.use('/api/volunteers', volunteerRouter);
server.use('/api/transfers', transfersRouter);

server.get('/', async (req, res) => {
	res.status(200).json({ api: 'running' });
});

module.exports = server;
