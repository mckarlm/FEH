
exports.up = function(knex, Promise) {
  return knex.schema.createTable('learned_skills', table => {
    table.bigIncrements();
    table.integer('skill').references('unit_skills.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('learned_skills');
};
