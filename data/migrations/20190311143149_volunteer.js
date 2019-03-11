exports.up = function(knex, Promise) {
	return knex.schema.createTable('volunteer', table => {
		table.increments();

		table
			.string('volunteer_name', 255)
			.notNullable()
			.unique();

		table.string('volunteer_address', 255).notNullable();
		table.integer('cell_phone', 255).notNullable();
		table.string('email', 255).notNullable();
		table.string('password', 255).notNullable();

		table
			.integer('food_id')
			.unsigned()
			.references('id')
			.inTable('food')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table
			.integer('pantry_id')
			.unsigned()
			.references('id')
			.inTable('pantry')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	// undo the operation in up
	return knex.schema.dropTableIfExists('volunteer');
};
