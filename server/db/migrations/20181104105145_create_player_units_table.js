
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_units', table => {
    table.increments();
    table.integer('owner_id').references('users.id');
    table.integer('unit_base_id').references('unit_bases.id');
    table.string('description').notNullable();
    // table.boolean('legend').defaultTo(false); MAKE INTO NEW TABLE
    // table.boolean('brave').defaultTo(false); not necessary?
    table.string('origin').notNullable();
    table.integer('rarity').notNullable();
    table.string('weapon_type').notNullable();
    table.string('move_type').notNullable();
    table.string('color').notNullable();
    // table.string('blessing').notNullable(); MAKE INTO A NEW TABLE
    table.integer('level').defaultTo(40).notNullable();
    table.boolean('summoner_support').defaultTo(false);
    table.integer('ally_support').references('unit_bases.id');
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
