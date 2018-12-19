
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
          description: `At start of combat, if unit\'s HP = 50% and is adjacent to a magic ally, calculates damage using the lower of foe\'s Def or Res.`,
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
          description: `If unit\'s HP = 50%, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces.`,
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
          description: `If unit\'s HP ≥ 90% in combat against an axe foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Axebreaker 3`,
          description: `If unit\'s HP ≥ 90% in combat against an axe foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
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
          description: `If unit\'s HP ≥ 90% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `B Tomebreaker 3`,
          description: `If unit\'s HP ≥ 90% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
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
          description: `If unit\'s HP ≥ 90% in combat against a bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Bowbreaker 3`,
          description: `If unit\'s HP ≥ 90% in combat against a bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.`,
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
          description: `Negates all weapon-triangle advantage granted by unit\'s and foe\'s skills.`,
          type: `type_b`,
          level: 1
        },
        {
          name: `Cancel Affinity 2`,
          description: `If unit initiates combat against a foe that can counter and unit\'s HP ≤ 40%, unit makes a guaranteed follow-up attack.`,
          type: `type_b`,
          level: 2
        },
        {
          name: `Cancel Affinity 3`,
          description: `If unit initiates combat against a foe that can counter and unit\'s HP ≤ 50%, unit makes a guaranteed follow-up attack.`,
          type: `type_b`,
          level: 3
        },
      ]);
    });
};

/*
5★
≥≤

{
  name: ``,
  description: ``,
  type: `type_b`,
  level: 1,
  prf: true
},
*/