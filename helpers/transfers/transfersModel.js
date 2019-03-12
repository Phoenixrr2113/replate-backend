const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
};

function find() {
	return db('transfers').select('id', 'name');
}

function findBy(filter) {
	return db('transfers').where(filter);
}

async function add(transfer) {
	const [id] = await db('transfers').insert(transfers);

	return findById(id);
}

function findById(id) {
	return db('transfers')
		.where({ id })
		.first();
}
