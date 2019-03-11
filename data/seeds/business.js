exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('business')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('business').insert([
				{
					id: 1,
					name: 'Publix',
					phone: 4444444444,
					address: '1 main st, miami fl, 32321',
					email: 'support@publix.com',
					password: 'pass',
				},
				{
					id: 2,
					name: 'CVS',
					phone: 2222222222,
					address: '13 main st, miami fl, 32321',
					email: 'support@cvs.com',
					password: 'pass',
				},
			]);
		});
};
