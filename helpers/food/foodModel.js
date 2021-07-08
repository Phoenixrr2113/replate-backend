const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
};

function find() {
	return db('food').select('id', 'name');
}

function findBy(filter) {
	return db('food').where(filter);
}

async function add(food) {
	const [id] = await db('food').insert(food);

	return findById(id);
}

function findById(id) {
	return db('food')
		.where({ id })
		.first();
}
