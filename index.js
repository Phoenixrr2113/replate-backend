const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
	res.send('Welcome To Replate');
});

const port = 5000;
server.listen(port, function() {
	console.log(`\n======= Web API Listening on ${port} =======\n`);
});
