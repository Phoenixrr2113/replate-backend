const express = require('express');

const businessRouter = require('../helpers/business/businessRouter');

const server = express();

server.use(express.json());

server.use('/api/business', businessRouter);

server.get('/', async (req, res) => {
	res.status(200).json({ api: 'running' });
});

module.exports = server;
