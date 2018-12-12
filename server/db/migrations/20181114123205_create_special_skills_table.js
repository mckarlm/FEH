
exports.up = function(knex, Promise) {
  return knex.schema.createTable('special_skills', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.text('description');
    table.integer('cooldown').notNullable();
    table.boolean('prf').defaultTo(false).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('special_skills');
};
