
exports.up = function(knex, Promise) {
  return knex.schema.createTable('unit_bases', table => {
    table.increments();
    table.string('name').unique().notNullable();
    
    //not needed?
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
  return knex.schema.dropTable('unit_bases');
};
