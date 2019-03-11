exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('food')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('food').insert([
				{
					id: 1,
					name: 'mashed potatos',
					quantity: '10',
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
				{
					id: 2,
					name: 'canned goods',
					quantity: '30',
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
				{
					id: 3,
					name: 'roast beef',
					quantity: '5',
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
			]);
		});
};
