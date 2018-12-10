
exports.up = function(knex, Promise) {
  return knex.schema.createTable('unit_bases', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.string('description').notNullable();
    table.string('origin').notNullable();
    
    table.string('wpn_type').notNullable();
    table.string('move_type').notNullable();
    table.string('color').notNullable();
    table.boolean('legend').defaultTo(false);
    table.boolean('brave').defaultTo(false);
    
    // possibly needed, whiteboard it?
    // table.integer('hp_max_default').notNullable();
    // table.integer('atk_max_default').notNullable();
    // table.integer('spd_max_default').notNullable();
    // table.integer('def_max_default').notNullable();
    // table.integer('res_max_default').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('unit_bases');
};
