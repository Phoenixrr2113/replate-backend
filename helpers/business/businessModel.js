const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
};

function find() {
	return db('business').select('id', 'name');
}

function findBy(filter) {
	return db('business').where(filter);
}

async function add(business) {
	const [id] = await db('business').insert(business);

	return findById(id);
}

function findById(id) {
	return db('business')
		.where({ id })
		.first();
}
