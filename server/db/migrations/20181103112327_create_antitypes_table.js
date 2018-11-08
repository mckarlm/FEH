
exports.up = function(knex, Promise) {
  return knex.schema.createTable('antitypes', table => {
    table.increments();
    table.string('eff_vs').unique().notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('antitypes');
};
