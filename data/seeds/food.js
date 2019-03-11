exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('food')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('table_name').insert([
				{
					id: 1,
					food_name: 'mashed potatos',
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
				{
					id: 2,
					food_name: 'canned goods',
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
				{
					id: 2,
					food_name: 'roast beef',
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
			]);
		});
};
