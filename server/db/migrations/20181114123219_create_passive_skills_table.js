
exports.up = function(knex, Promise) {
  return knex.schema.createTable('passive_skills', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.text('description');
    table.string('type').notNullable();
    table.integer('level').defaultTo(1).notNullable();
    table.boolean('prf').defaultTo(false).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('passive_skills');
};
