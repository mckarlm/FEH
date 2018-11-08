
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_units', table => {
    table.increments();
    table.integer('owner_id').references('users.id');
    table.integer('unit_base_id').references('unit_bases.id');
    table.integer('rarity').notNullable();
    // table.string('blessing').notNullable(); MAKE INTO A NEW TABLE
    table.integer('level').defaultTo(40).notNullable();
    table.boolean('summ_support').defaultTo(false);
    table.integer('ally_support').references('unit_bases.id').nullable();
    table.integer('weapon').references('skills.id');
    table.integer('assist').references('skills.id');
    table.integer('special').references('skills.id');
    table.integer('slot_A').references('skills.id');
    table.integer('slot_B').references('skills.id');
    table.integer('slot_C').references('skills.id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player_units');
};
