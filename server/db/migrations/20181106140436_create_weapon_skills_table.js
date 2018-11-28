
exports.up = function(knex, Promise) {
  return knex.schema.createTable('weapon_skills', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.text('description');
    table.boolean('prf').defaultTo(false).notNullable();
    table.string('weapon_type').notNullable();
    table.integer('refine').references('refine.id').defaultTo(0).notNullable();
    table.integer('mt').defaultTo(0).notNullable();
    table.integer('hp').defaultTo(0).notNullale();
    table.integer('atk').defaultTo(0).notNullable();
    table.integer('spd').defaultTo(0).notNullable();
    table.integer('def').defaultTo(0).notNullable();
    table.integer('res').defaultTo(0).notNullable();
    table.integer('anti').references('antitypes.id').defaultTo(0).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('weapon_skills');
};