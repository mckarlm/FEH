
exports.up = function(knex, Promise) {
  return knex.schema.createTable('base_units', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.string('description').notNullable();
    table.string('origin').notNullable();
    
    table.string('wpn_type').notNullable();
    table.string('move_type').notNullable();
    table.string('color').notNullable();
    table.boolean('legend').defaultTo(false);
    table.boolean('brave').defaultTo(false);
    
    // not needed?
    // can possibly be case-by-case instead?
    // table.integer('prf').references('skills.id');
    // table.integer('prf2').references('skills.id');
    // table.integer('prf3').references('skills.id');

    // possibly needed, whiteboard it?
    // table.integer('hp_max_default').notNullable();
    // table.integer('atk_max_default').notNullable();
    // table.integer('spd_max_default').notNullable();
    // table.integer('def_max_default').notNullable();
    // table.integer('res_max_default').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('base_units');
};
