
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assist_skills', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.text('description');
    table.boolean('prf').defaultTo(false).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assist_skills');
};
