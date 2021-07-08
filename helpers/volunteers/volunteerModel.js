const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
};

function find() {
	return db('volunteer').select('id', 'first_name');
}

function findBy(filter) {
	return db('volunteer').where(filter);
}

async function add(volunteer) {
	const [id] = await db('volunteer').insert(volunteer);

	return findById(id);
}

function findById(id) {
	return db('volunteer')
		.where({ id })
		.first();
}
