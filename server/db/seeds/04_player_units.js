
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_units').del()
    .then(function () {
      // Inserts seed entries
      return knex('player_units').insert([
        {
          owner_id: 1,
          unit_base_id: 1,
          rarity: 5,
          level: 40,
          summ_support: false,
          ally_support: 1,
          weapon: 1,
          assist: 2,
          special: 3,
          slot_a: 4,
          slot_b: 5,
          slot_c: 6
        },
        {
          owner_id: 1,
          unit_base_id: 1,
          rarity: 5,
          level: 40,
          summ_support: false,
          ally_support: 1,
          weapon: 1,
          assist: 2,
          special: 3,
          slot_a: 4,
          slot_b: 5,
          slot_c: 6
        },
        {
          owner_id: 1,
          unit_base_id: 1,
          rarity: 5,
          level: 40,
          summ_support: false,
          ally_support: 1,
          weapon: 1,
          assist: 2,
          special: 3,
          slot_a: 4,
          slot_b: 5,
          slot_c: 6
        }
      ]);
    });
};
