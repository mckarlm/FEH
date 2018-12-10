
exports.up = function(knex, Promise) {
  return knex.schema.createTable('seals', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.text('description');
    table.boolean('prf').defaultTo(false).notNullable();
    table.integer('level').defaultTo(0).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seals');
};
