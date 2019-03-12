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
					quantity_lbs: 10,
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
				{
					id: 2,
					name: 'canned goods',
					quantity_lbs: 30,
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
				{
					id: 3,
					name: 'roast beef',
					quantity_lbs: 5,
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
			]);
		});
};
