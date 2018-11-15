
exports.up = function(knex, Promise) {
  return knex.schema.createTable('passive_skills', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.text('description');
    table.boolean('prf').defaultTo(false).notNullable();
    table.string('slot').notNullable();
    table.integer('level').defaultTo(0).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('passive_skills');
};
