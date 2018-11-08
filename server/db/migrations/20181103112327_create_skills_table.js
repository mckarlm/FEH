
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skills', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.string('description').unique().notNullable();
    table.string('type').notNullable();
    table.integer('level').defaultTo(0).notNullable();
    table.integer('mt').defaultTo(0).notNullable();
    table.boolean('prf').defaultTo(false).notNullable();
    table.string('refine').defaultTo('none').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('skills');
};
