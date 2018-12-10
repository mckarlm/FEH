
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blessings', table => {
    table.increments();
    table.string('blessing').unique().notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blessings');
};
