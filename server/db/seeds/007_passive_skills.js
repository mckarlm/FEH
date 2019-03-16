
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('passive_skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('passive_skills').insert([
        // ===== TYPE_A ===== //
        {
          name: `Armored Blow 1`,
          description: `If unit initiates combat, grants Def+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Armored Blow 2`,
          description: `If unit initiates combat, grants Def+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Armored Blow 3`,
          description: `If unit initiates combat, grants Def+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Atk/Def Bond 1`,
          description: `If unit is adjacent to an ally, grants Atk/Def+3 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Atk/Def Bond 2`,
          description: `If unit is adjacent to an ally, grants Atk/Def+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Atk/Def Bond 3`,
          description: `If unit is adjacent to an ally, grants Atk/Def+5 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Atk/Res Bond 1`,
          description: `If unit is adjacent to an ally, grants Atk/Res+3 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Atk/Res Bond 2`,
          description: `If unit is adjacent to an ally, grants Atk/Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Atk/Res Bond 3`,
          description: `If unit is adjacent to an ally, grants Atk/Res+5 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Atk/Res Solo 1`,
          description: `If unit is not adjacent to an ally, grants Atk/Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Atk/Res Solo 2`,
          description: `If unit is not adjacent to an ally, grants Atk/Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Atk/Res Solo 3`,
          description: `If unit is not adjacent to an ally, grants Atk/Res+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Atk/Spd 1`,
          description: `Grants Atk/Spd+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Atk/Spd 2`,
          description: `Grants Atk/Spd+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Atk/Spd Bond 1`,
          description: `If unit is adjacent to an ally, grants Atk/Spd+3 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Atk/Spd Bond 2`,
          description: `If unit is adjacent to an ally, grants Atk/Spd+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Atk/Spd Bond 3`,
          description: `If unit is adjacent to an ally, grants Atk/Spd+5 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Atk/Spd Push 1`,
          description: `At start of combat, if unit\'s HP = 100%, grants Atk/Spd+3, but if unit attacked, deals 1 damage to unit after combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Atk/Spd Push 2`,
          description: `At start of combat, if unit\'s HP = 100%, grants Atk/Spd+4, but if unit attacked, deals 1 damage to unit after combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Atk/Spd Push 3`,
          description: `At start of combat, if unit\'s HP = 100%, grants Atk/Spd+5, but if unit attacked, deals 1 damage to unit after combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Atk/Spd Solo 1`,
          description: `If unit is not adjacent to an ally, grants Atk/Spd+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Atk/Spd Solo 2`,
          description: `If unit is not adjacent to an ally, grants Atk/Spd+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Atk/Spd Solo 3`,
          description: `If unit is not adjacent to an ally, grants Atk/Spd+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Atk/Def 1`,
          description: `Grants Atk/Def+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Atk/Def 2`,
          description: `Grants Atk/Def+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Attack 1`,
          description: `Grants Atk+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Attack 2`,
          description: `Grants Atk+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Attack 3`,
          description: `Grants Atk+3.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Atk/Res 1`,
          description: `Grants Atk/Res+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Atk/Res 2`,
          description: `Grants Atk/Res+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Bracing Blow 1`,
          description: `If unit initiates combat, grants Def/Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Bracing Blow 2`,
          description: `If unit initiates combat, grants Def/Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Bracing Stance 1`,
          description: `If foe initiates combat, grants Def/Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Bracing Stance 2`,
          description: `If foe initiates combat, grants Def/Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Brazen Atk/Def 1`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Def+3 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Brazen Atk/Def 2`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Def+5 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Brazen Atk/Def 3`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Def+7 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Brazen Atk/Res 1`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Res+3 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Brazen Atk/Res 2`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Res+5 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Brazen Atk/Res 3`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Res+7 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Brazen Atk/Spd 1`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Spd+3 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Brazen Atk/Spd 2`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Spd+5 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Brazen Atk/Spd 3`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Spd+7 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Brazen Def/Res 1`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Def/Res+3 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Brazen Def/Res 2`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Def/Res+5 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Brazen Def/Res 3`,
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Def/Res+7 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `C Duel Infantry 1`,
          description: `Grants HP+3. If unit is 5★ and level 40 and unit\'s stats total less than 160, treat unit\'s stats as 160 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `C Duel Infantry 2`,
          description: `Grants HP+4. If unit is 5★ and level 40 and unit\'s stats total less than 165, treat unit\'s stats as 165 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `C Duel Infantry 3`,
          description: `Grants HP+5. If unit is 5★ and level 40 and unit\'s stats total less than 170, treat unit\'s stats as 170 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Close Counter`,
          description: `Unit can counterattack regardless of foe\'s range.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Close Defense 1`,
          description: `If foe initiates combat and uses sword, lance, axe, or dragonstone, grants Def/Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Close Defense 2`,
          description: `If foe initiates combat and uses sword, lance, axe, or dragonstone, grants Def/Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Close Defense 3`,
          description: `If foe initiates combat and uses sword, lance, axe, or dragonstone, grants Def/Res+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Darting Blow 1`,
          description: `If unit initiates combat, grants Spd+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Darting Blow 2`,
          description: `If unit initiates combat, grants Spd+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Darting Blow 3`,
          description: `If unit initiates combat, grants Spd+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Darting Stance 1`,
          description: `If foe initiates combat, grants Spd+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Darting Stance 2`,
          description: `If foe initiates combat, grants Spd+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Darting Stance 3`,
          description: `If foe initiates combat, grants Spd+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Death Blow 1`,
          description: `If unit initiates combat, grants Atk+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Death Blow 2`,
          description: `If unit initiates combat, grants Atk+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Death Blow 3`,
          description: `If unit initiates combat, grants Atk+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Death Blow 4`,
          description: `If unit initiates combat, grants Atk+8 during combat.`,
          type: `type_a`,
          level: 4
        },
        {
          name: `Def/Res 1`,
          description: `Grants Def/Res+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Def/Res 2`,
          description: `Grants Def/Res+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Defense 1`,
          description: `Grants Def+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Defense 2`,
          description: `Grants Def+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Defense 3`,
          description: `Grants Def+3.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Defiant Atk 1`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Atk+3 for 1 turn.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Defiant Atk 2`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Atk+5 for 1 turn.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Defiant Atk 3`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Atk+7 for 1 turn.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Defiant Def 1`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Def+3 for 1 turn.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Defiant Def 2`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Def+5 for 1 turn.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Defiant Def 3`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Def+7 for 1 turn.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Defiant Res 1`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Res+3 for 1 turn.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Defiant Res 2`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Res+5 for 1 turn.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Defiant Res 3`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Res+7 for 1 turn.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Defiant Spd 1`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Spd+3 for 1 turn.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Defiant Spd 2`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Spd+5 for 1 turn.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Defiant Spd 3`,
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Spd+7 for 1 turn.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Distant Counter`,
          description: `Unit can counterattack regardless of foe\'s range.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Distant Defense 1`,
          description: `If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Distant Defense 2`,
          description: `If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Distant Defense 3`,
          description: `If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Earth Boost 1`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Def+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Earth Boost 2`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Def+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Earth Boost 3`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Def+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Fierce Breath`,
          description: `If foe initiates combat, grants Atk+4 during combat and Special cooldown charge+1 per attack. (Only highest value applied. Does not stack.)`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Fierce Stance 1`,
          description: `If foe initiates combat, grants Atk+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Fierce Stance 2`,
          description: `If foe initiates combat, grants Atk+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Fierce Stance 3`,
          description: `If foe initiates combat, grants Atk+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Fire Boost 1`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Atk+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Fire Boost 2`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Atk+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Fire Boost 3`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Atk+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Flashing Blade 1`,
          description: `If unit\'s Spd ≥ foe\'s Spd+5, grants Special cooldown charge+1 per unit\'s attack. (Only highest value applied. Does not stack.)`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Flashing Blade 2`,
          description: `If unit\'s Spd ≥ foe\'s Spd+3, grants Special cooldown charge+1 per unit\'s attack. (Only highest value applied. Does not stack.)`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Flashing Blade 3`,
          description: `If unit\'s Spd > foe\'s Spd, grants Special cooldown charge+1 per unit\'s attack. (Only highest value applied. Does not stack.)`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Fort. Def/Res 1`,
          description: `Grants Def/Res+3. Inflict Atk-3.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Fort. Def/Res 2`,
          description: `Grants Def/Res+4. Inflict Atk-3.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Fort. Def/Res 3`,
          description: `Grants Def/Res+6. Inflict Atk-2.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Fort. Def 1`,
          description: `Grants Def+3. Inflict Atk-3.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Fort. Def 2`,
          description: `Grants Def+4. Inflict Atk-3.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Fort. Def 3`,
          description: `Grants Def+5. Inflict Atk-3.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Fort. Res 1`,
          description: `Grants Res+3. Inflict Atk-3.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Fort. Res 2`,
          description: `Grants Res+4. Inflict Atk-3.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Fort. Res 3`,
          description: `Grants Res+5. Inflict Atk-3.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Fury 1`,
          description: `Grants Atk/Spd/Def/Res+1. After combat, deals 2 damage to unit.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Fury 2`,
          description: `Grants Atk/Spd/Def/Res+2. After combat, deals 4 damage to unit.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Fury 3`,
          description: `Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `G Duel Infantry 1`,
          description: `Grants HP+3. If unit is 5★ and level 40 and unit\'s stats total less than 160, treat unit\'s stats as 160 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `G Duel Infantry 2`,
          description: `Grants HP+4. If unit is 5★ and level 40 and unit\'s stats total less than 165, treat unit\'s stats as 165 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `G Duel Infantry 3`,
          description: `Grants HP+5. If unit is 5★ and level 40 and unit\'s stats total less than 170, treat unit\'s stats as 170 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Heavy Blade 1`,
          description: `If unit\'s Atk ≥ foe\'s Atk+5, grants Special cooldown charge+1 per unit\'s attack. (Only highest value applied. Does not stack.)`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Heavy Blade 2`,
          description: `If unit\'s Atk ≥ foe\'s Atk+3, grants Special cooldown charge+1 per unit\'s attack. (Only highest value applied. Does not stack.)`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Heavy Blade 3`,
          description: `If unit\'s Atk > foe\'s Atk, grants Special cooldown charge+1 per unit\'s attack. (Only highest value applied. Does not stack.)`,
          type: `type_a`,
          level: 3
        },
        {
          name: `HP/Atk 1`,
          description: `Grants HP+3, Atk+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `HP/Atk 2`,
          description: `Grants HP+4, Atk+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `HP/Def 1`,
          description: `Grants HP+3, Def+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `HP/Def 2`,
          description: `Grants HP+4, Def+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `HP 1`,
          description: `Grants HP+3.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `HP 2`,
          description: `Grants HP+4.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `HP 3`,
          description: `Grants HP+5.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `HP/Res 1`,
          description: `Grants HP+3, Res+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `HP/Res 2`,
          description: `Grants HP+4, Res+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `HP/Spd 1`,
          description: `Grants HP+3, Spd+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `HP/Spd 2`,
          description: `Grants HP+4, Spd+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Iote\'s Shield`,
          description: `Neutralizes \"effective against flying\" bonuses.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Kestrel Stance 1`,
          description: `If foe initiates combat, grants Atk/Spd+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Kestrel Stance 2`,
          description: `If foe initiates combat, grants Atk/Spd+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Life and Death 1`,
          description: `Grants Atk/Spd+3. Inflicts Def/Res-3.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Life and Death 2`,
          description: `Grants Atk/Spd+4. Inflicts Def/Res-4.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Life and Death 3`,
          description: `Grants Atk/Spd+5. Inflicts Def/Res-5.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Mirror Stance 1`,
          description: `If foe initiates combat, grants Atk/Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Mirror Stance 2`,
          description: `If foe initiates combat, grants Atk/Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Mirror Strike 1`,
          description: `If unit initiates combat, grants Atk/Spd+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Mirror Strike 2`,
          description: `If unit initiates combat, grants Atk/Spd+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `R Duel Flying 1`,
          description: `Grants HP+3. If unit is 5★ and level 40 and unit\'s stats total less than 160, treat unit\'s stats as 160 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `R Duel Flying 2`,
          description: `Grants HP+4. If unit is 5★ and level 40 and unit\'s stats total less than 165, treat unit\'s stats as 165 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `R Duel Flying 3`,
          description: `Grants HP+5. If unit is 5★ and level 40 and unit\'s stats total less than 170, treat unit\'s stats as 170 in modes like Arena. (Higher-scoring opponents will appear. Stat total calculation excludes any values added by merges and skills.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Resistance 1`,
          description: `Grants Res+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Resistance 2`,
          description: `Grants Res+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Resistance 3`,
          description: `Grants Res+3.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Sorcery Blade 1`,
          description: `At start of combat, if unit\'s HP = 100% and is adjacent to a magic ally, calculates damage using the lower of foe\'s Def or Res.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Sorcery Blade 2`,
          description: `At start of combat, if unit\'s HP ≥ 50% and is adjacent to a magic ally, calculates damage using the lower of foe\'s Def or Res.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Sorcery Blade 3`,
          description: `At start of combat, if unit is adjacent to a magic ally, calculates damage using the lower of foe\'s Def or Res.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Spd/Def 1`,
          description: `Grants Spd/Def+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Spd/Def 2`,
          description: `Grants Spd/Def+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Spd/Def Bond 1`,
          description: `If unit is adjacent to an ally, grants Spd/Def+3 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Spd/Def Bond 2`,
          description: `If unit is adjacent to an ally, grants Spd/Def+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Spd/Def Bond 3`,
          description: `If unit is adjacent to an ally, grants Spd/Def+5 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Spd/Res 1`,
          description: `Grants Spd/Res+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Spd/Res 2`,
          description: `Grants Spd/Res+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Spd/Res Bond 1`,
          description: `If unit is adjacent to an ally, grants Spd/Res+3 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Spd/Res Bond 2`,
          description: `If unit is adjacent to an ally, grants Spd/Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Spd/Res Bond 3`,
          description: `If unit is adjacent to an ally, grants Spd/Res+5 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Speed 1`,
          description: `Grants Spd+1.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Speed 2`,
          description: `Grants Spd+2.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Speed 3`,
          description: `Grants Spd+3.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Steady Blow 1`,
          description: `If unit initiates combat, grants Spd/Def+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Steady Blow 2`,
          description: `If unit initiates combat, grants Spd/Def+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Steady Breath`,
          description: `If foe initiates combat, grants Def+4 during combat and Special cooldown charge+1 per attack. (Only highest value applied. Does not stack.)`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Steady Posture 1`,
          description: `If foe initiates combat, grants Spd/Def+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Steady Posture 2`,
          description: `If foe initiates combat, grants Spd/Def+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Steady Stance 1`,
          description: `If foe initiates combat, grants Def+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Steady Stance 2`,
          description: `If foe initiates combat, grants Def+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Steady Stance 3`,
          description: `If foe initiates combat, grants Def+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Steady Stance 4`,
          description: `If foe initiates combat, grants Def+8 during combat and inflicts Special cooldown charge-1 on foe per attack. (Only highest value applied. Does not stack.)`,
          type: `type_a`,
          level: 4
        },
        {
          name: `Sturdy Blow 1`,
          description: `If unit initiates combat, grants Atk/Def+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Sturdy Blow 2`,
          description: `If unit initiates combat, grants Atk/Def+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Sturdy Stance 1`,
          description: `If foe initiates combat, grants Atk/Def+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Sturdy Stance 2`,
          description: `If foe initiates combat, grants Atk/Def+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Svalinn Shield`,
          description: `Neutralizes "effective against armored" bonuses.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Swift Sparrow 1`,
          description: `If unit initiates combat, grants Atk/Spd+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Swift Sparrow 2`,
          description: `If unit initiates combat, grants Atk/Spd+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Swift Stance 1`,
          description: `If foe initiates combat, grants Spd/Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Swift Stance 2`,
          description: `If foe initiates combat, grants Spd/Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Swift Strike 1`,
          description: `If unit initiates combat, grants Spd/Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Swift Strike 2`,
          description: `If unit initiates combat, grants Spd/Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Triangle Adept 1`,
          description: `If unit has weapon-triangle advantage, boosts Atk by 10%. If unit has weapon-triangle disadvantage, reduces Atk by 10%.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Triangle Adept 2`,
          description: `If unit has weapon-triangle advantage, boosts Atk by 15%. If unit has weapon-triangle disadvantage, reduces Atk by 15%.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Triangle Adept 3`,
          description: `If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Warding Blow 1`,
          description: `If unit initiates combat, grants Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Warding Blow 2`,
          description: `If unit initiates combat, grants Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Warding Blow 3`,
          description: `If unit initiates combat, grants Res+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Warding Breath`,
          description: `If foe initiates combat, grants Res+2 during combat and Special cooldown charge+1 per attack. (Only highest value applied. Does not stack.)`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Warding Stance 1`,
          description: `If foe initiates combat, grants Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Warding Stance 2`,
          description: `If foe initiates combat, grants Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Warding Stance 3`,
          description: `If foe initiates combat, grants Res+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Water Boost 1`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Res+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Water Boost 2`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Res+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Water Boost 3`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Res+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        {
          name: `Wind Boost 1`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Spd+2 during combat.`,
          type: `type_a`,
          level: 1
        },
        {
          name: `Wind Boost 2`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Spd+4 during combat.`,
          type: `type_a`,
          level: 2
        },
        {
          name: `Wind Boost 3`,
          description: `At start of combat, if unit\'s HP ≥ foe\'s HP+3, grants Spd+6 during combat.`,
          type: `type_a`,
          level: 3
        },
        // ===== PRF TYPE_A ===== //
        {
          name: `Dragonskin`,
          description: `Neutralizes "effective against flying" bonuses. If foe initiates combat, grants Def/Res+4 during combat.`,
          type: `type_a`,
          level: 1,
          prf: true
        },
        {
          name: `Laws of Sacae`,
          description: `If foe initiates combat and number of allies within 2 spaces ≥ 2, grants Atk/Spd/Def/Res+4 during combat.`,
          type: `type_a`,
          level: 1,
          prf: true
        },
        {
          name: `Ostian Counter`,
          description: `Unit can counterattack regardless of foe\'s range. If foe initiates combat, grants Atk/Def+4 during combat.`,
          type: `type_a`,
          level: 1,
          prf: true
        },
        // ===== TYPE_B ===== //
        {
          name: `Aerobatics 1`,
          description: `If unit\'s HP = 100%, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Aerobatics 2`,
          description: `If unit\'s HP ≥ 50%, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Aerobatics 3`,
          description: `Unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Atk/Def Link 1`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Def+2 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Atk/Def Link 2`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Def+4 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Atk/Def Link 3`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Def+6 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Atk/Res Link 1`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Res+2 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Atk/Res Link 2`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Res+4 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Atk/Res Link 3`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Res+6 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Atk/Spd Link 1`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Spd+2 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Atk/Spd Link 2`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Spd+4 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Atk/Spd Link 3`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Spd+6 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Axebreaker 1`,
          description: `If unit\'s HP ≥ 90% in combat against an axe foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Axebreaker 2`,
          description: `If unit\'s HP ≥ 70% in combat against an axe foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Axebreaker 3`,
          description: `If unit\'s HP ≥ 50% in combat against an axe foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `B Tomebreaker 1`,
          description: `If unit\'s HP ≥ 90% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `B Tomebreaker 2`,
          description: `If unit\'s HP ≥ 70% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `B Tomebreaker 3`,
          description: `If unit\'s HP ≥ 50% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Blaze Dance 1`,
          description: `If Sing or Dance is used, grants Atk+2 to target.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Blaze Dance 2`,
          description: `If Sing or Dance is used, grants Atk+3 to target.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Blaze Dance 3`,
          description: `If Sing or Dance is used, grants Atk+4 to target.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Bold Fighter 1`,
          description: `If unit\'s HP = 100% and unit initiates combat, grants Special cooldown charge+1 per unit\'s attack, and unit makes a guaranteed follow-up attack. (Does not stack.)`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Bold Fighter 2`,
          description: `If unit\'s HP ≥ 50% and unit initiates combat, grants Special cooldown charge+1 per unit\'s attack, and unit makes a guaranteed follow-up attack. (Does not stack.)`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Bold Fighter 3`,
          description: `If unit initiates combat, grants Special cooldown charge+1 per unit\'s attack, and unit makes a guaranteed follow-up attack. (Does not stack.)`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Bowbreaker 1`,
          description: `If unit\'s HP ≥ 90% in combat against a bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Bowbreaker 2`,
          description: `If unit\'s HP ≥ 70% in combat against a bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Bowbreaker 3`,
          description: `If unit\'s HP ≥ 50% in combat against a bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Brash Assault 1`,
          description: `If unit initiates combat against a foe that can counter and unit\'s HP ≤ 30%, unit makes a guaranteed follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Brash Assault 2`,
          description: `If unit initiates combat against a foe that can counter and unit\'s HP ≤ 40%, unit makes a guaranteed follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Brash Assault 3`,
          description: `If unit initiates combat against a foe that can counter and unit\'s HP ≤ 50%, unit makes a guaranteed follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Cancel Affinity 1`,
          description: `Neutralizes all weapon-triangle advantage granted by unit\'s and foe\'s skills.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Cancel Affinity 2`,
          description: `Neutralizes all weapon-triangle advantage granted by unit\'s skills. If unit has weapon-triangle advantage, neutralizes weapon-triangle advantage granted by foe\'s skills.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Cancel Affinity 3`,
          description: `Neutralizes all weapon-triangle advantage granted by unit\'s skills. If unit has weapon-triangle disadvantage, reverses weapon-triangle advantage granted by foe\'s skills.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Chill Atk 1`,
          description: `At start of turn, inflicts Atk-3 on foe on the enemy team with the highest Atk through its next action.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Chill Atk 2`,
          description: `At start of turn, inflicts Atk-5 on foe on the enemy team with the highest Atk through its next action.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Chill Atk 3`,
          description: `At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Chill Def 1`,
          description: `At start of turn, inflicts Def-3 on foe on the enemy team with the highest Def through its next action.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Chill Def 2`,
          description: `At start of turn, inflicts Def-5 on foe on the enemy team with the highest Def through its next action.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Chill Def 3`,
          description: `At start of turn, inflicts Def-7 on foe on the enemy team with the highest Def through its next action.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Chill Res 1`,
          description: `At start of turn, inflicts Res-3 on foe on the enemy team with the highest Res through its next action.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Chill Res 2`,
          description: `At start of turn, inflicts Res-5 on foe on the enemy team with the highest Res through its next action.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Chill Res 3`,
          description: `At start of turn, inflicts Res-7 on foe on the enemy team with the highest Res through its next action.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Chill Spd 1`,
          description: `At start of turn, inflicts Spd-3 on foe on the enemy team with the highest Spd through its next action.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Chill Spd 2`,
          description: `At start of turn, inflicts Spd-5 on foe on the enemy team with the highest Spd through its next action.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Chill Spd 3`,
          description: `At start of turn, inflicts Spd-7 on foe on the enemy team with the highest Spd through its next action.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Daggerbreaker 1`,
          description: `If unit\'s HP ≥ 90% in combat against a dagger foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Daggerbreaker 2`,
          description: `If unit\'s HP ≥ 70% in combat against a dagger foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Daggerbreaker 3`,
          description: `If unit\'s HP ≥ 50% in combat against a dagger foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Dazzling Staff 1`,
          description: `If unit\'s HP = 100%, foe cannot counterattack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Dazzling Staff 2`,
          description: `If unit\'s HP ≥ 50%, foe cannot counterattack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Dazzling Staff 3`,
          description: `Foe cannot counterattack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Def Feint 1`,
          description: `If a Rally Assist skill is used by unit or targets unit, inflicts Def-3 on foes in cardinal directions of unit through their next actions.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Def Feint 2`,
          description: `If a Rally Assist skill is used by unit or targets unit, inflicts Def-5 on foes in cardinal directions of unit through their next actions.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Def Feint 3`,
          description: `If a Rally Assist skill is used by unit or targets unit, inflicts Def-7 on foes in cardinal directions of unit through their next actions.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Def/Res Link 1`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Def/Res+2 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Def/Res Link 2`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Def/Res+4 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Def/Res Link 3`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Def/Res+6 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Deluge Dance 1`,
          description: `If Sing or Dance is used, grants Spd+2 and Res+3 to target.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Deluge Dance 2`,
          description: `If Sing or Dance is used, grants Spd+3 and Res+4 to target.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Desperation 1`,
          description: `If unit\'s HP ≤ 25% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Desperation 2`,
          description: `If unit\'s HP ≤ 50% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Desperation 3`,
          description: `If unit\'s HP ≤ 75% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Dull Close 1`,
          description: `At start of combat, if unit\'s HP = 100% and foe uses sword, lance, axe, or dragonstone, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Dull Close 2`,
          description: `At start of combat, if unit\'s HP ≥ 50% and foe uses sword, lance, axe, or dragonstone, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Dull Close 3`,
          description: `If foe uses sword, lance, axe, or dragonstone, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Dull Range 1`,
          description: `At start of combat, if unit\'s HP = 100% and foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Dull Range 2`,
          description: `At start of combat, if unit\'s HP ≥ 50% and foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Dull Range 3`,
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Earth Dance 1`,
          description: `If Sing or Dance is used, grants Def+3 to target.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Earth Dance 2`,
          description: `If Sing or Dance is used, grants Def+4 to target.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Earth Dance 3`,
          description: `If Sing or Dance is used, grants Def+5 to target.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Escape Route 1`,
          description: `If unit's HP ≤ 30%, unit can move to a space adjacent to any ally.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Escape Route 2`,
          description: `If unit's HP ≤ 40%, unit can move to a space adjacent to any ally.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Escape Route 3`,
          description: `If unit's HP ≤ 50%, unit can move to a space adjacent to any ally.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Fireflood 1`,
          description: `If Sing or Dance is used, grants Atk+2 and Res+3 to target.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Fireflood 2`,
          description: `If Sing or Dance is used, grants Atk+3 and Res+4 to target.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Firestorm 1`,
          description: `If Sing or Dance is used, grants Atk/Spd+2 to target.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Firestorm 2`,
          description: `If Sing or Dance is used, grants Atk/Spd+3 to target.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Flier Formation 1`,
          description: `If unit\'s HP = 100%, unit can move to a space adjacent to a flying ally within 2 spaces.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Flier Formation 2`,
          description: `If unit\'s HP ≥ 50%, unit can move to a space adjacent to a flying ally within 2 spaces.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Flier Formation 3`,
          description: `Unit can move to a space adjacent to a flying ally within 2 spaces.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `G Tomebreaker 1`,
          description: `If unit\'s HP ≥ 90% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `G Tomebreaker 2`,
          description: `If unit\'s HP ≥ 70% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `G Tomebreaker 3`,
          description: `If unit\'s HP ≥ 50% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Gale Dance 1`,
          description: `If Sing or Dance is used, grants Spd+2 to target.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Gale Dance 2`,
          description: `If Sing or Dance is used, grants Spd+3 to target.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Gale Dance 3`,
          description: `If Sing or Dance is used, grants Spd+4 to target.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Geyser Dance 1`,
          description: `If Sing or Dance is used, grants Def/Res+3 to target.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Geyser Dance 2`,
          description: `If Sing or Dance is used, grants Def/Res+4 to target.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Guard 1`,
          description: `At start of combat, if unit\'s HP = 100%, inflicts Special cooldown charge-1 on foe per attack. (Only highest value applied. Does not stack.)`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Guard 2`,
          description: `At start of combat, if unit\'s HP ≥ 90%, inflicts Special cooldown charge-1 on foe per attack. (Only highest value applied. Does not stack.)`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Guard 3`,
          description: `At start of combat, if unit\'s HP ≥ 80%, inflicts Special cooldown charge-1 on foe per attack. (Only highest value applied. Does not stack.)`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Hit and Run`,
          description: `If unit initiates combat, unit moves 1 space away after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Knock Back`,
          description: `If unit initiates combat, target foe moves 1 space away after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Lancebreaker 1`,
          description: `If unit\'s HP ≥ 90% in combat against a lance foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Lancebreaker 2`,
          description: `If unit\'s HP ≥ 70% in combat against a lance foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Lancebreaker 3`,
          description: `If unit\'s HP ≥ 50% in combat against a lance foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Live for Bounty`,
          description: `If unit survives, get 1.5x shards/crystals from a Training Tower map. (Only highest value applied. Does not stack.)`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Live for Honor`,
          description: `If unit survives, get 1.5x badges from a Training Tower map. (Only highest value applied. Does not stack.)`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Live to Serve 1`,
          description: `When healing an ally with a staff, restores HP to unit = 50% of HP restored to target.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Live to Serve 2`,
          description: `When healing an ally with a staff, restores HP to unit = 75% of HP restored to target.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Live to Serve 3`,
          description: `When healing an ally with a staff, restores HP to unit = HP restored to target.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Lunge`,
          description: `If unit initiates combat, unit and target foe swap spaces after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Mystic Boost 1`,
          description: `Disables foe\'s skills that \"calculate damage using the lower of foe\'s Def or Res\" and \"calculate damage from staff like other weapons.\" Restores 2 HP after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Mystic Boost 2`,
          description: `Disables foe\'s skills that \"calculate damage using the lower of foe\'s Def or Res\" and \"calculate damage from staff like other weapons.\" Restores 4 HP after combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Mystic Boost 3`,
          description: `Disables foe\'s skills that \"calculate damage using the lower of foe\'s Def or Res\" and \"calculate damage from staff like other weapons.\" Restores 6 HP after combat.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Null Follow-Up 1`,
          description: `At start of combat, if unit\'s HP = 100%, disables foe\'s skills that guarantee foe\'s follow-up attack and foe\'s skills that prevent unit\'s follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Null Follow-Up 2`,
          description: `At start of combat, if unit\'s HP ≥ 50%, disables foe\'s skills that guarantee foe\'s follow-up attack and foe\'s skills that prevent unit\'s follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Null Follow-Up 3`,
          description: `Disables foe\'s skills that guarantee foe\'s follow-up attack and foe\'s skills that prevent unit\'s follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Obstruct 1`,
          description: `If unit\'s HP ≥ 90%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.)`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Obstruct 2`,
          description: `If unit\'s HP ≥ 70%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.)`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Obstruct 3`,
          description: `If unit\'s HP ≥ 50%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.)`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Pass 1`,
          description: `If unit\'s HP ≥ 90%, unit can move through foes\' spaces.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Pass 2`,
          description: `If unit\'s HP ≥ 70%, unit can move through foes\' spaces.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Pass 3`,
          description: `If unit\'s HP ≥ 50%, unit can move through foes\' spaces.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Poison Strike 1`,
          description: `If unit initiates combat, deals 4 damage to foe after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Poison Strike 2`,
          description: `If unit initiates combat, deals 7 damage to foe after combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Poison Strike 3`,
          description: `If unit initiates combat, deals 10 damage to foe after combat.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Quick Riposte 1`,
          description: `If unit\'s HP ≥ 90% and foe initiates attack, unit makes a guaranteed follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Quick Riposte 2`,
          description: `If unit\'s HP ≥ 80% and foe initiates attack, unit makes a guaranteed follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Quick Riposte 3`,
          description: `If unit\'s HP ≥ 70% and foe initiates attack, unit makes a guaranteed follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `R Tomebreaker 1`,
          description: `If unit\'s HP ≥ 90% in combat against a red tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `R Tomebreaker 2`,
          description: `If unit\'s HP ≥ 70% in combat against a red tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `R Tomebreaker 3`,
          description: `If unit\'s HP ≥ 50% in combat against a red tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Renewal 1`,
          description: `At the start of every fourth turn, unit restores 10 HP.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Renewal 2`,
          description: `At the start of every third turn, unit restores 10 HP.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Renewal 3`,
          description: `At the start of every second turn, unit restores 10 HP.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Rockslide Dance 1`,
          description: `If Sing or Dance is used, grants Spd+3 and Def+4 to target.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Rockslide Dance 2`,
          description: `If Sing or Dance is used, grants Spd+4 and Def+5 to target.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Seal Atk 1`,
          description: `Inflicts Atk-3 on foe through its next action after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Seal Atk 2`,
          description: `Inflicts Atk-5 on foe through its next action after combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Seal Atk 3`,
          description: `Inflicts Atk-7 on foe through its next action after combat.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Seal Atk/Def 1`,
          description: `Inflicts Atk/Def-3 on foe through its next action after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Seal Atk/Def 2`,
          description: `Inflicts Atk/Def-5 on foe through its next action after combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Seal Atk/Spd 1`,
          description: `Inflicts Atk/Spd-3 on foe through its next action after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Seal Atk/Spd 2`,
          description: `Inflicts Atk/Spd-5 on foe through its next action after combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Seal Def 1`,
          description: `Inflicts Def-3 on foe through its next action after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Seal Def 2`,
          description: `Inflicts Def-5 on foe through its next action after combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Seal Def 3`,
          description: `Inflicts Def-7 on foe through its next action after combat.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Seal Def/Res 1`,
          description: `Inflicts Def/Res-3 on foe through its next action after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Seal Def/Res 2`,
          description: `Inflicts Def/Res-5 on foe through its next action after combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Seal Res 1`,
          description: `Inflicts Res-3 on foe through its next action after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Seal Res 2`,
          description: `Inflicts Res-5 on foe through its next action after combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Seal Res 3`,
          description: `Inflicts Res-7 on foe through its next action after combat.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Seal Spd 1`,
          description: `Inflicts Spd-3 on foe through its next action after combat.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Seal Spd 2`,
          description: `Inflicts Spd-5 on foe through its next action after combat.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Seal Spd 3`,
          description: `Inflicts Spd-7 on foe through its next action after combat.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Shield Pulse 1`,
          description: `At the start of turn 1, if foe\'s attack triggers Special, grants Special cooldown-1.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Shield Pulse 2`,
          description: `At the start of turn 1, if foe\'s attack triggers Special, grants Special cooldown-1. Reduces damage dealt to unit by 5 when Special triggers.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Shield Pulse 3`,
          description: `At the start of turn 1, if foe\'s attack triggers Special, grants Special cooldown-2. Reduces damage dealt to unit by 5 when Special triggers.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Spd Feint 1`,
          description: `If a Rally Assist skill is used by unit or targets unit, inflicts Spd-3 on foes in cardinal directions of unit through their next actions.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Spd Feint 2`,
          description: `If a Rally Assist skill is used by unit or targets unit, inflicts Spd-5 on foes in cardinal directions of unit through their next actions.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Spd Feint 3`,
          description: `If a Rally Assist skill is used by unit or targets unit, inflicts Spd-7 on foes in cardinal directions of unit through their next actions.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Spd/Res Link 1`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Spd/Res+2 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Spd/Res Link 2`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Spd/Res+4 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Spd/Res Link 3`,
          description: `If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Spd/Res+6 to unit and target ally or unit and targeting ally for 1 turn.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Special Fighter 1`,
          description: `At start of combat, if unit\'s HP ≥ 90%, grants Special cooldown charge+1 to unit and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Special Fighter 2`,
          description: `At start of combat, if unit\'s HP ≥ 70%, grants Special cooldown charge+1 to unit and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Special Fighter 3`,
          description: `At start of combat, if unit\'s HP ≥ 50%, grants Special cooldown charge+1 to unit and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Swordbreaker 1`,
          description: `If unit\'s HP ≥ 90% in combat against a sword foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Swordbreaker 2`,
          description: `If unit\'s HP ≥ 70% in combat against a sword foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Swordbreaker 3`,
          description: `If unit\'s HP ≥ 50% in combat against a sword foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Torrent Dance 1`,
          description: `If Sing or Dance is used, grants Res+3 to target.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Torrent Dance 2`,
          description: `If Sing or Dance is used, grants Res+4 to target.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Torrent Dance 3`,
          description: `If Sing or Dance is used, grants Res+5 to target.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Vantage 1`,
          description: `If unit\'s HP ≤ 75% and foe initiates combat, unit can counterattack before foe\'s first attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Vantage 2`,
          description: `If unit\'s HP ≤ 50% and foe initiates combat, unit can counterattack before foe\'s first attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Vantage 3`,
          description: `If unit\'s HP ≤ 25% and foe initiates combat, unit can counterattack before foe\'s first attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Vengeful Fighter 1`,
          description: `If unit\'s HP ≥ 90% and foe initiates combat, grants Special cooldown charge+1 to unit per attack, and unit makes a guaranteed follow-up attack. (Does not stack.)`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Vengeful Fighter 2`,
          description: `If unit\'s HP ≥ 70% and foe initiates combat, grants Special cooldown charge+1 to unit per attack, and unit makes a guaranteed follow-up attack. (Does not stack.)`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Vengeful Fighter 3`,
          description: `If unit\'s HP ≥ 50% and foe initiates combat, grants Special cooldown charge+1 to unit per attack, and unit makes a guaranteed follow-up attack. (Does not stack.)`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Wary Fighter 1`,
          description: `If unit\'s HP ≥ 90%, unit and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Wary Fighter 2`,
          description: `If unit\'s HP ≥ 70%, unit and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Wary Fighter 3`,
          description: `If unit\'s HP ≥ 50%, unit and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Watersweep 1`,
          description: `If unit initiates combat, unit cannot make a follow-up attack. If unit\'s Spd ≥ foe\'s Spd+5 and foe uses magic, staff, or dragonstone, foe cannot counterattack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Watersweep 2`,
          description: `If unit initiates combat, unit cannot make a follow-up attack. If unit\'s Spd ≥ foe\'s Spd+3 and foe uses magic, staff, or dragonstone, foe cannot counterattack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Watersweep 3`,
          description: `If unit initiates combat, unit cannot make a follow-up attack. If unit\'s Spd > foe\'s Spd and foe uses magic, staff, or dragonstone, foe cannot counterattack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Windsweep 1`,
          description: `If unit initiates combat, unit cannot make a follow-up attack. If unit\'s Spd ≥ foe\'s Spd+5 and foe uses sword, lance, axe, bow, or dagger, foe cannot counterattack.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Windsweep 2`,
          description: `If unit initiates combat, unit cannot make a follow-up attack. If unit\'s Spd ≥ foe\'s Spd+3 and foe uses sword, lance, axe, bow, or dagger, foe cannot counterattack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Windsweep 3`,
          description: `If unit initiates combat, unit cannot make a follow-up attack. If unit\'s Spd > foe\'s Spd and foe uses sword, lance, axe, bow, or dagger, foe cannot counterattack.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Wings of Mercy 1`,
          description: `If an ally\'s HP ≤ 30%, unit can move to a space adjacent to that ally.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Wings of Mercy 2`,
          description: `If an ally\'s HP ≤ 40%, unit can move to a space adjacent to that ally.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Wings of Mercy 3`,
          description: `If an ally\'s HP ≤ 50%, unit can move to a space adjacent to that ally.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Wrath 1`,
          description: `At start of turn, if unit\'s HP ≤ 25% and unit\'s attack trigger Special, grants Special cooldown-1. Deals +10 damage when Special triggers.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Wrath 2`,
          description: `At start of turn, if unit\'s HP ≤ 50% and unit\'s attack trigger Special, grants Special cooldown-1. Deals +10 damage when Special triggers.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Wrath 3`,
          description: `At start of turn, if unit\'s HP ≤ 75% and unit\'s attack trigger Special, grants Special cooldown-1. Deals +10 damage when Special triggers.`,
          type: `type_b`,
          level: 3
        },
        {
          name: `Wrathful Staff 1`,
          description: `At start of combat, if unit\'s HP = 100%, calculates damage from staff like other weapons.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Wrathful Staff 2`,
          description: `At start of combat, if unit\'s HP ≥ 50%, calculates damage from staff like other weapons.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Wrathful Staff 3`,
          description: `Calculates damage from staff like other weapons.`,
          type: `type_b`,
          level: 3
        },
        // ===== PRF TYPE_B ===== //
        {
          name: `Beorc\'s Blessing`,
          description: `Neutralizes cavalry and flying foes\' bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Binding Shield`,
          description: `In combat against a dragon foe, unit makes a guaranteed follow-up attack and foe cannot counterattack or make a follow-up attack.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Bushido`,
          description: `Deals +10 damage when Special triggers.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Chilling Seal`,
          description: `At start of turn, if unit\'s HP ≥ 50%, inflicts Atk/Spd-6 on foe on enemy team with the lowest defense through its next action.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Crusader\'s Ward`,
          description: `If unit receives consecutive attacks and foe\'s Range = 2, reduces damage from foe\'s second attack onward by 80%.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Double Lion`,
          description: `If unit\'s HP = 100% at start of combat and unit initiates combat, unit attacks twice, but deals 1 damage to unit after combat.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Follow-Up Ring`,
          description: `At start of combat, if unit\'s HP ≥ 50%, unit makes a guaranteed follow-up attack.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Freezing Seal`,
          description: `At start of turn, if unit\'s HP ≥ 50%, inflicts Atk/Spd-6 on foe on enemy team with the lowest Res through its next action.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Lunar Brace`,
          description: `Slows Special trigger (cooldown count+1). Deals damage = 50% of foe\'s Def when Special triggers.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Recover Ring`,
          description: `At start of turn, unit restores 10 HP.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `S Drink`,
          description: `At the start of turn 1, restores 99 HP and grants Special cooldown count-1.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Sacae\'s Blessing`,
          description: `If foe uses sword, lance, or axe, foe cannot counterattack.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Solar Brace`,
          description: `Restores HP = 30% of damage dealt when Special triggers.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        {
          name: `Warp Powder`,
          description: `If unit\'s HP ≥ 80%, unit can move to a space adjacent to any ally within 2 spaces.`,
          type: `type_b`,
          level: 1,
          prf: true
        },
        // ===== TYPE_C ===== //
        {
          name: `Armor March 1`,
          description: `At start of turn, if unit\'s HP = 100% and unit is adjacent to an armored ally, unit and adjacent armor allies can move 1 extra space. (That turn only. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Armor March 2`,
          description: `At start of turn, if unit\'s HP ≥ 50% and unit is adjacent to an armored ally, unit and adjacent armor allies can move 1 extra space. (That turn only. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Armor March 3`,
          description: `At start of turn, if unit is adjacent to an armored ally, unit and adjacent armor allies can move 1 extra space. (That turn only. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Atk Ploy 1`,
          description: `At start of turn, inflicts Atk-3 on foes in cardinal directions with Res < unit\'s Res through their next actions.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Atk Ploy 2`,
          description: `At start of turn, inflicts Atk-4 on foes in cardinal directions with Res < unit\'s Res through their next actions.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Atk Ploy 3`,
          description: `At start of turn, inflicts Atk-5 on foes in cardinal directions with Res < unit\'s Res through their next actions.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Atk Smoke 1`,
          description: `Inflicts Atk-3 on foes within 2 spaces of target through their next actions after combat.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Atk Smoke 2`,
          description: `Inflicts Atk-5 on foes within 2 spaces of target through their next actions after combat.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Atk Smoke 3`,
          description: `Inflicts Atk-7 on foes within 2 spaces of target through their next actions after combat.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Atk Tactic 1`,
          description: `At start of turn, grants Atk+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally\'s movement type on current team ≤ 2.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Atk Tactic 2`,
          description: `At start of turn, grants Atk+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally\'s movement type on current team ≤ 2.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Atk Tactic 3`,
          description: `At start of turn, grants Atk+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally\'s movement type on current team ≤ 2.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Axe Experience 1`,
          description: `While unit lives and uses an axe, unit gets 1.5x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Axe Experience 2`,
          description: `While unit lives, all axe allies on team get 1.5x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Axe Experience 3`,
          description: `While unit lives, all axe allies on team get 2x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Axe Valor 1`,
          description: `While unit lives and uses an axe, unit gets 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Axe Valor 2`,
          description: `While unit lives, all axe allies on team get 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Axe Valor 3`,
          description: `While unit lives, all axe allies on team get 2x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `B Tome Experience 1`,
          description: `While unit lives and uses a blue tome, unit gets 1.5x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `B Tome Experience 2`,
          description: `While unit lives, all blue tome allies on team get 1.5x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `B Tome Experience 3`,
          description: `While unit lives, all blue tome allies on team get 2x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `B Tome Valor 1`,
          description: `While unit lives and uses a blue tome, unit gets 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `B Tome Valor 2`,
          description: `While unit lives, all blue tome allies on team get 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `B Tome Valor 3`,
          description: `While unit lives, all blue tome allies on team get 2x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Bow Experience 1`,
          description: `While unit lives and uses a bow, unit gets 1.5x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Bow Experience 2`,
          description: `While unit lives, all bow allies on team get 1.5x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Bow Experience 3`,
          description: `While unit lives, all bow allies on team get 2x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Bow Valor 1`,
          description: `While unit lives and uses a bow, unit gets 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Bow Valor 2`,
          description: `While unit lives, all bow allies on team get 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Bow Valor 3`,
          description: `While unit lives, all bow allies on team get 2x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Breath of Life 1`,
          description: `If unit initiates combat, restores 3 HP to adjacent allies after combat.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Breath of Life 2`,
          description: `If unit initiates combat, restores 5 HP to adjacent allies after combat.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Breath of Life 3`,
          description: `If unit initiates combat, restores 7 HP to adjacent allies after combat.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Close Guard 1`,
          description: `Allies within 2 spaces gain: \"If foe uses sword, lance, axe, dragonstone, or beast damage, grants Def/Res+2 during combat.\"`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Close Guard 2`,
          description: `Allies within 2 spaces gain: \"If foe uses sword, lance, axe, dragonstone, or beast damage, grants Def/Res+3 during combat.\"`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Close Guard 3`,
          description: `Allies within 2 spaces gain: \"If foe uses sword, lance, axe, dragonstone, or beast damage, grants Def/Res+4 during combat.\"`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Dagger Valor 1`,
          description: `While unit lives and uses a dagger, unit gets 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Dagger Valor 2`,
          description: `While unit lives, all dagger allies on team get 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Dagger Valor 3`,
          description: `While unit lives, all dagger allies on team get 2x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Def Ploy 1`,
          description: `At start of turn, inflicts Def-3 on foes in cardinal directions with Res < unit\'s Res through their next actions.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Def Ploy 2`,
          description: `At start of turn, inflicts Def-4 on foes in cardinal directions with Res < unit\'s Res through their next actions.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Def Ploy 3`,
          description: `At start of turn, inflicts Def-5 on foes in cardinal directions with Res < unit\'s Res through their next actions.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Def Smoke 1`,
          description: `Inflicts Def-3 on foes within 2 spaces of target through their next actions after combat.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Def Smoke 2`,
          description: `Inflicts Def-5 on foes within 2 spaces of target through their next actions after combat.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Def Smoke 3`,
          description: `Inflicts Def-7 on foes within 2 spaces of target through their next actions after combat.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Def Tactic 1`,
          description: `At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally\'s movement type on current team ≤ 2.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Def Tactic 2`,
          description: `At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally\'s movement type on current team ≤ 2.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Def Tactic 3`,
          description: `At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally\'s movement type on current team ≤ 2.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Distant Guard 1`,
          description: `Allies within 2 spaces gain: \"If foe uses bow, dagger, magic, or staff, grants Def/Res+2 during combat.\"`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Distant Guard 2`,
          description: `Allies within 2 spaces gain: \"If foe uses bow, dagger, magic, or staff, grants Def/Res+3 during combat.\"`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Distant Guard 3`,
          description: `Allies within 2 spaces gain: \"If foe uses bow, dagger, magic, or staff, grants Def/Res+4 during combat.\"`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Dragon Valor 1`,
          description: `While unit lives and uses a dragonstone, unit gets 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Dragon Valor 2`,
          description: `While unit lives, all dragonstone allies on team get 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Dragon Valor 3`,
          description: `While unit lives, all dragonstone allies on team get 2x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Drive Atk 1`,
          description: `Grants Atk+2 to allies within 2 spaces during combat.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Drive Def 2`,
          description: `Grants Def+3 to allies within 2 spaces during combat.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Drive Def 1`,
          description: `Grants Def+2 to allies within 2 spaces during combat.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Drive Def 2`,
          description: `Grants Def+3 to allies within 2 spaces during combat.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Drive Res 1`,
          description: `Grants Res+2 to allies within 2 spaces during combat.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Drive Res 2`,
          description: `Grants Res+3 to allies within 2 spaces during combat.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Drive Spd 1`,
          description: `Grants Spd+2 to allies within 2 spaces during combat.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Drive Spd 2`,
          description: `Grants Spd+3 to allies within 2 spaces during combat.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Even Atk Wave 1`,
          description: `At start of even-numbered turns, grants Atk+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Even Atk Wave 2`,
          description: `At start of even-numbered turns, grants Atk+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Even Atk Wave 3`,
          description: `At start of even-numbered turns, grants Atk+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Even Def Wave 1`,
          description: `At start of even-numbered turns, grants Def+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Even Def Wave 2`,
          description: `At start of even-numbered turns, grants Def+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Even Def Wave 3`,
          description: `At start of even-numbered turns, grants Def+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Even Res Wave 1`,
          description: `At start of even-numbered turns, grants Res+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Even Res Wave 2`,
          description: `At start of even-numbered turns, grants Res+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Even Res Wave 3`,
          description: `At start of even-numbered turns, grants Res+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Even Spd Wave 1`,
          description: `At start of even-numbered turns, grants Spd+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Even Spd Wave 2`,
          description: `At start of even-numbered turns, grants Spd+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Even Spd Wave 3`,
          description: `At start of even-numbered turns, grants Spd+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Flier Guidance 1`,
          description: `If unit\'s HP = 100%, flying allies within 2 spaces can move to a space adjacent to unit.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Flier Guidance 2`,
          description: `If unit\'s HP ≤ 50%, flying allies within 2 spaces can move to a space adjacent to unit.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Flier Guidance 3`,
          description: `Flying allies within 2 spaces can move to a space adjacent to unit.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Fortify Armor`,
          description: `At start of turn, grants Def/Res+6 to adjacent armored allies for 1 turn.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Fortify Beasts`,
          description: `At start of turn, grants Def/Res+6 to adjacent beast allies for 1 turn.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Fortify Cavalry`,
          description: `At start of turn, grants Def/Res+6 to adjacent cavalry allies for 1 turn.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Fortify Def 1`,
          description: `At start of turn, grants Def+2 to adjacent allies for 1 turn.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Fortify Def 2`,
          description: `At start of turn, grants Def+3 to adjacent allies for 1 turn.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Fortify Def 3`,
          description: `At start of turn, grants Def+4 to adjacent allies for 1 turn.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Fortify Dragons`,
          description: `At start of turn, grants Def/Res+6 to adjacent dragon allies for 1 turn.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Fortify Fliers`,
          description: `At start of turn, grants Def/Res+6 to adjacent flying allies for 1 turn.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Fortify Res 1`,
          description: `At start of turn, grants Res+2 to adjacent allies for 1 turn.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Fortify Res 2`,
          description: `At start of turn, grants Res+3 to adjacent allies for 1 turn.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Fortify Res 3`,
          description: `At start of turn, grants Res+4 to adjacent allies for 1 turn.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `G Tome Experience 1`,
          description: `While unit lives and uses a green tome, unit gets 1.5x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `G Tome Experience 2`,
          description: `While unit lives, all green tome allies on team get 1.5x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `G Tome Experience 3`,
          description: `While unit lives, all green tome allies on team get 2x EXP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `G Tome Valor 1`,
          description: `While unit lives and uses a green tome, unit gets 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `G Tome Valor 2`,
          description: `While unit lives, all green tome allies on team get 1.5x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `G Tome Valor 3`,
          description: `While unit lives, all green tome allies on team get 2x SP. (Only highest value applied. Does not stack.)`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Goad Armor`,
          description: `Grants Atk/Spd+4 to armored allies during combat.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Goad Cavalry`,
          description: `Grants Atk/Spd+4 to cavalry allies during combat.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Goad Dragons`,
          description: `Grants Atk/Spd+4 to dragon allies during combat.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Goad Flier`,
          description: `Grants Atk/Spd+4 to flying allies during combat.`,
          type: `type_c`,
          level: 3,
        },
        {
          name: `Guidance 1`,
          description: `If unit\'s HP = 100%, infantry and armored allies within 2 spaces can move to a space adjacent to unit.`,
          type: `type_c`,
          level: 1,
        },
        {
          name: `Guidance 2`,
          description: `If unit\'s HP ≤ 50%, infantry and armored allies within 2 spaces can move to a space adjacent to unit.`,
          type: `type_c`,
          level: 2,
        },
        {
          name: `Guidance 3`,
          description: `infantry and armored allies within 2 spaces can move to a space adjacent to unit.`,
          type: `type_c`,
          level: 3,
        },
        
        // ===== PRF TYPE_C ===== //
      ]);
    });
};

/*
5★
≥≤

{
  name: ``,
  description: ``,
  type: `type_c`,
  level: 1,
  prf: true
},
*/