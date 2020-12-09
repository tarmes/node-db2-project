
exports.up = function(knex) {
   return knex.schema.createTable('cars', table => {
      table.increments();
      table.string('VIN', 17).unique().notNullable();
      table.string('make', 128).notNullable();
      table.string('model', 128).notNullable();
      table.integer('mileage').notNullable();
      table.boolean('clean');
      table.boolean('salvage');
   });
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('cars');
};
