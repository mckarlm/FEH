
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('refines').del()
    .then(function () {
      // Inserts seed entries
      return knex('refines').insert([
        {
          id: 0,
          refine: 'none'
        },
        {
          id: 1,
          refine: 'eff'
        },
        {
          id: 2,
          refine: 'atk'
        },
        {
          id: 3,
          refine: 'spd'
        },
        {
          id: 4,
          refine: 'def'
        },
        {
          id: 5,
          refine: 'res'
        },
        {
          id: 6,
          refine: 'wrathful'
        },
        {
          id: 7,
          refine: 'dazzling'
        }
      ]);
    });
};
