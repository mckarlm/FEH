
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assist_skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('assist_skills').insert([
        {
          name: `Ardent Sacrifice`,
          description: `Restores 10 HP to target ally. Unit loses 10 HP but cannot go below 1.`
        },
        {
          name: `Draw Back`,
          description: `Unit moves 1 space away from target ally. Ally moves to unit\'s previous space.`
        },
        {
          name: `Harsh Command`,
          description: `Converts penalties on target into bonuses.`
        },
        {
          name: `Heal`,
          description: `Restores 5 HP to target ally.`
        },
        {
          name: `Martyr`,
          description: `Slow Special trigger (cooldown count+1). Restores HP = damage dealt to unit+7. Restores HP to unit = half damage dealt to unit.`
        },
        {
          name: `Martyr+`,
          description: ``
        },
        // ================ PRF ================ //
        {
          name: `Dance`,
          description: `Grants another action to target ally. (Cannot target an ally with Sing or Dance.)`,
          prf: true
        },
        {
          name: `Future Vision`,
          description: `Unit and target ally swap spaces. Grants another action to unit. (Additional action granted once per turn only.)`,
          prf: true
        },
        {
          name: `Sing`,
          description: `Grants another action to target ally. (Cannot target an ally with Sing or Dance.)`,
          prf: true
        }
      ]);
    });
};

/*
{
  name: ``,
  description: ``
},
*/