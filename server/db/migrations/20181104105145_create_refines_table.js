
exports.up = function(knex, Promise) {
  return knex.schema.createTable('refines', table => {
    table.increments();
    table.string('refine').unique().notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('refines');
};
