exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('transfer_details')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('transfer_details').insert([
				{ id: 1, business_id: 1, volunteer_id: 1, foodbank_id: 1, food_id: 1 },
				{ id: 2, business_id: 1, volunteer_id: 2, foodbank_id: 2, food_id: 3 },
			]);
		});
};
