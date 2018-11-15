
exports.up = function(knex, Promise) {
  return knex.schema.createTable('seals', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.text('description');
    table.integer('level').defaultTo(1).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seals');
};
