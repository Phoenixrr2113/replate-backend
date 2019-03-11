exports.up = function(knex, Promise) {
	return knex.schema.createTable('food', table => {
		table.increments();

		table
			.string('food_name')
			.notNullable()
			.unique();

		table.integer('quantity');
		table.varchar('comment');

		table
			.integer('business_id')
			.unsigned()
			.references('id')
			.inTable('business')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	// undo the operation in up
	return knex.schema.dropTableIfExists('food');
};
