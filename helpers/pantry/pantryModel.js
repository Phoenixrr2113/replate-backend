const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
};

function find() {
	return db('pantry').select('id', 'name');
}

function findBy(filter) {
	return db('pantry').where(filter);
}

async function add(pantry) {
	const [id] = await db('pantry').insert(pantry);

	return findById(id);
}

function findById(id) {
	return db('pantry')
		.where({ id })
		.first();
}
