
exports.up = function(knex, Promise) {
  return knex.schema.createTable('unit_skills', table => {
    table.bigIncrements();
    table.integer('skill_id').references('skills.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('unit_skills');
};
