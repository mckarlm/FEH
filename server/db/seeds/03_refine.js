
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('refines').del()
    .then(function () {
      // Inserts seed entries
      return knex('refines').insert([
        {
          refine: 'none'
        },
        {
          refine: 'eff'
        },
        {
          refine: 'atk'
        },
        {
          refine: 'spd'
        },
        {
          refine: 'def'
        },
        {
          refine: 'res'
        },
      ]);
    });
};
