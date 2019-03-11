exports.up = function(knex, Promise) {
	return knex.schema.createTable('pantry', table => {
		table.increments();

		table
			.string('name', 255)
			.notNullable()
			.unique();

		table.string('address', 255).notNullable();
		table.integer('phone', 255).notNullable();
		table.string('email', 255).notNullable();
		table.string('password', 255).notNullable();
	});
};

exports.down = function(knex, Promise) {
	// undo the operation in up
	return knex.schema.dropTableIfExists('pantry');
};
