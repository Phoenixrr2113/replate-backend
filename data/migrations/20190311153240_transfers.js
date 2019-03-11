exports.up = function(knex, Promise) {
	return knex.schema.createTable('transfers', table => {
		table.increments();

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

		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	// undo the operation in up
	return knex.schema.dropTableIfExists('transfers');
};
