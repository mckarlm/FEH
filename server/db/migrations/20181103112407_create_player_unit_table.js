
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_unit', table => {
    table.increments();
    table.integer('owner_id').references('users.id');
    table.integer('unit_base_id').references('unit_bases.id');
    table.integer('rarity').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player_unit');
};
