exports.up = function(knex, Promise) {
	return knex.schema.createTable('pantry', table => {
		table.increments();

		table
			.string('pantry_name', 255)
			.notNullable()
			.unique();

		table.string('pantry_address', 255).notNullable();
		table.integer('phone', 255).notNullable();
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
			.integer('business_id')
			.unsigned()
			.references('id')
			.inTable('business')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table
			.integer('volunteer_id')
			.unsigned()
			.references('id')
			.inTable('volunteer')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	// undo the operation in up
	return knex.schema.dropTableIfExists('pantry');
};
