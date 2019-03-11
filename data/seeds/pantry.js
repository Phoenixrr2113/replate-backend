exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('pantry')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('pantry').insert([
				{
					id: 1,
					name: 'VFW',
					address: '3 west oaks ln, miami fl, 34322',
					phone: 4442222223,
					email: 'support@vfw.com',
					password: 'pass',
				},
				{
					id: 2,
					name: 'Salvation army',
					address: '3333 terry ave, miami fl, 34322',
					phone: 5555555555,
					email: 'support@salvation.com',
					password: 'pass',
				},
			]);
		});
};
