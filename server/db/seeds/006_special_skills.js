
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('special_skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('special_skills').insert([
        {
          name: `Aegis`,
          description: `If foe\'s Range = 2, reduces damage from that foe\'s attack by 50%.`,
          cooldown: 3
        },
        {
          name: `Aether`,
          description: `Treats foe\'s Def/Res as if reduced by 50% during combat. Restores HP = half of damage dealt.`,
          cooldown: 5
        },
        {
          name: `Astra`,
          description: `Boosts damage dealt by 150%.`,
          cooldown: 4
        },
        {
          name: `Blazing Flame`,
          description: `Before combat this unit initiates, foes in an area near target take damage equal to 1.5x (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Blazing Light`,
          description: `Before combat this unit initiates, foes in an area near target take damage equal to 1.5x (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Blazing Thunder`,
          description: `Before combat this unit initiates, foes in an area near target take damage equal to 1.5x (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Blazing Wind`,
          description: `Before combat this unit initiates, foes in an area near target take damage equal to 1.5x (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Blue Flame`,
          description: `Boosts damage by 10. If unit is adjacent to an ally, boosts damage by 25 instead.`,
          cooldown: 3
        },
        {
          name: `Bonfire`,
          description: `Boosts damage by 50% of unit\'s Def.`,
          cooldown: 3
        },
        {
          name: `Buckler`,
          description: `Reduces damage from an adjacent foe\s attack by 30%.`,
          cooldown: 3
        },
        {
          name: `Chilling Wind`,
          description: `Boosts damage by 50% of unit\'s Res.`,
          cooldown: 4
        },
        {
          name: `Daylight`,
          description: `Restores HP = 30% of damage dealt.`,
          cooldown: 3
        },
        {
          name: `Draconic Aura`,
          description: `Boosts damage by 30% of unit\'s Atk.`,
          cooldown: 3
        },
        {
          name: `Dragon Fang`,
          description: `Boosts damage by 50% of unit\'s Atk.`,
          cooldown: 4
        },
        {
          name: `Dragon Gaze`,
          description: `Boosts damage by 30% of unit\s Atk.`,
          cooldown: 4
        },
        {
          name: `Earthwater Balm`,
          description: `When healing an ally with a staff, grants Def/Res+4 to all allies for 1 turn.`,
          cooldown: 1
        },
        {
          name: `Earthwater Balm+`,
          description: `When healing an ally with a staff, grants Def/Res+6 to all allies for 1 turn.`,
          cooldown: 1
        },
        {
          name: `Escutcheon`,
          description: `Reduces damage dealt by adjacent foe\'s attack b 30%.`,
          cooldown: 2
        },
        {
          name: `Galeforce`,
          description: `If unit initiates combat, grants unit another action after combat. (Once per turn.)`,
          cooldown: 5
        },
        {
          name: `Glacies`,
          description: `Boosts damage by 80% of unit\'s Res.`,
          cooldown: 4
        },
        {
          name: `Glimmer`,
          description: `Boosts damage dealt by 50%.`,
          cooldown: 2
        },
        {
          name: `Glowing Ember`,
          description: `Boosts damage by 50% of unit\'s Def.`,
          cooldown: 4
        },
        {
          name: `Growing Flame`,
          description: `Before combat this unit initiates, foes in a wide area around target take damage equal to  (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Growing Light`,
          description: `Before combat this unit initiates, foes in a wide area around target take damage equal to  (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Growing Thunder`,
          description: `Before combat this unit initiates, foes in a wide area around target take damage equal to  (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Growing Wind`,
          description: `Before combat this unit initiates, foes in a wide area around target take damage equal to  (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Heavenly Light`,
          description: `When healing an ally with a staff, restores 10 HP to all allies.`,
          cooldown: 2
        },
        {
          name: `Holy Vestments`,
          description: `If foe\'s Range = 2, reduces damage from that foe\'s attack by 30%.`,
          cooldown: 3
        },
        {
          name: `Iceberg`,
          description: `Boosts damage by 50% of unit\'s Res.`,
          cooldown: 3
        },
        {
          name: `Ignis`,
          description: `Boosts damage by 80% of unit\'s Def.`,
          cooldown: 4
        },
        {
          name: `Imbue`,
          description: `When healing an ally with a staff, restores an additional 10 HP to target ally.`,
          cooldown: 1
        },
        {
          name: `Kindled-Fire Balm`,
          description: `When healing an ally with a staff, grants Atk+4 to all allies for 1 turn.`,
          cooldown: 1
        },
        {
          name: `Luna`,
          description: `Treat foe\'s Def/Res as if reduced by 50% during combat.`,
          cooldown: 3
        },
        {
          name: `Miracle`,
          description: `If unit\'s HP > 1 and foe would reduce unit\'s HP to 0 unit survives with 1 HP.`,
          cooldown: 5
        },
        {
          name: `Moonbow`,
          description: `Treat foe\'s Def/Res as if reduced by 30% during combat.`,
          cooldown: 2
        },
        {
          name: `New Moon`,
          description: `Treat foe\'s Def/Res as if reduced by 30% during combat.`,
          cooldown: 3
        },
        {
          name: `Night Sky`,
          description: `Boosts damage dealt by 50%.`,
          cooldown: 3
        },
        {
          name: `Noontime`,
          description: `Restores HP = 30% of damage dealt.`,
          cooldown: 2
        },
        {
          name: `Pavise`,
          description: `Reduces damage from adjacent foe\'s attack by 50%.`,
          cooldown: 3
        },
        {
          name: `Reprisal`,
          description: `Boosts damage by 30% of damage dealt to unit.`,
          cooldown: 2
        },
        {
          name: `Retribution`,
          description: `Boosts damage by 30% of damage dealt to unit.`,
          cooldown: 3
        },
        {
          name: `Rising Flame`,
          description: `Before combat this unit initiates, foes in an area near target take damage equal to  (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Rising Light`,
          description: `Before combat this unit initiates, foes in an area near target take damage equal to  (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Rising Thunder`,
          description: `Before combat this unit initiates, foes in an area near target take damage equal to  (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Rising Wind`,
          description: `Before combat this unit initiates, foes in an area near target take damage equal to  (unit\'s Atk - foe\'s Def or Res).`,
          cooldown: 4
        },
        {
          name: `Sacred Cowl`,
          description: `If foe\'s Range = 2, reduces damage from foe\'s attack by 30%.`,
          cooldown: 2
        },
        {
          name: `Sol`,
          description: `Restores HP = 50% of damage dealt.`,
          cooldown: 3
        },
        {
          name: `Solid-Earth Balm`,
          description: `When healing an ally with a staff, grants Def+4 to all allies for 1 turn.`,
          cooldown: 1
        },
        {
          name: `Still-Water Balm`,
          description: `When healing an ally with a staff, grants Res+4 to all allies for 1 turn.`,
          cooldown: 1
        },
        {
          name: `Swift-Winds Balm`,
          description: `When healing an ally with a staff, grants Spd+4 to all allies for 1 turn.`,
          cooldown: 1
        },
        {
          name: `Vengeance`,
          description: `Boosts damage by 50% of damage dealt to unit.`,
          cooldown: 3
        },
        {
          name: `Windfire Balm`,
          description: `When healing an ally with a staff, grants Atk/Spd+4 to all allies for 1 turn.`,
          cooldown: 1
        },
        {
          name: `Windfire Balm+`,
          description: `When healing an ally with a staff, grants Atk/Spd+6 to all allies for 1 turn.`,
          cooldown: 1
        },
        // ===== PRF ===== //
        {
          name: `Black Luna`,
          description: `Treats foe\'s Def/Res as if reduced by 80% during combat.`,
          cooldown: 3,
          prf: true
        },
        {
          name: `Fire Emblem`,
          description: `Boosts damage by 30% of unit\'s Spd. Grants Atk/Spd/Def/Res+4 to unit and all allies for 1 turn after combat. (Bonus granted to allies even if unit\'s HP reaches 0.)`,
          cooldown: 2,
          prf: true
        },
        {
          name: `Ice Mirror`,
          description: `If foe\'s Range = 2, reduces damage from that foe\'s attack by 30%. Boosts unit\'s next attack by total damage reduced (by any source, including other skills) when Special triggers. Resets at end of combat.`,
          cooldown: 2,
          prf: true
        },
        {
          name: `Radiant Aether`,
          description: `Treats foe\'s Def/Res as if reduced by 50% during combat. Restores HP = 50% of damage dealt.`,
          cooldown: 4,
          prf: true
        },
        {
          name: `Regnal Astra`,
          description: `Boosts damage by 40% of unit\'s Spd.`,
          cooldown: 0,
          prf: true
        },
      ]);
    });
};

/*
{
  name: ``,
  description: ``,
  cooldown: 0,
  prf: true
},
*/