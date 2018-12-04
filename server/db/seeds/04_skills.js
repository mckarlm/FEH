
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        // =============== SWORD =============== //
        {
          name: 'Iron Sword',
          description: ``,
          type: 'sword',
          mt: 6
        },
        {
          name: 'Steel Sword',
          description: ``,
          type: 'sword',
          mt: 8
        },
        {
          name: 'Silver Sword',
          description: ``,
          type: 'sword',
          mt: 11
        },
        {
          name: 'Silver Sword+',
          description: ``,
          type: 'sword',
          mt: 15,
        },
        {
          name: 'Silver Sword+(atk)',
          description: ``,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2
        },
        {
          name: 'Silver Sword+(spd)',
          description: ``,
          type: 'sword',
          mt: 16,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          name: 'Silver Sword+(def)',
          description: ``,
          type: 'sword',
          mt: 16,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          name: 'Silver Sword+(res)',
          description: ``,
          type: 'sword',
          mt: 16,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          name: 'Brave Sword',
          description: `Inflicts Spd-5. If unit initiates combat, unit attacks twice.`,
          type: 'sword',
          mt: 5,
          spd: -5
        },
        {
          name: 'Brave Sword+',
          description: `Inflicts Spd-5. If unit initiates combat, unit attacks twice.`,
          type: 'sword',
          mt: 8,
          spd: -5
        },
        {
          name: 'Killing Edge',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 7
        },
        {
          name: 'Killing Edge+',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 11
        },
        {
          name: 'Slaying Edge',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 10
        },
        {
          name: 'Slaying Edge+',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 14
        },
        {
          name: 'Slaying Edge+(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2
        },
        {
          name: 'Slaying Edge+(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 14,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          name: 'Slaying Edge+(def)',
          description: `Accelerates Special trigger (cooldown count-1)`,
          type: 'sword',
          mt: 14,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          name: 'Slaying Edge+(res)',
          description: `Accelerates Special trigger (cooldown count-1)`,
          type: 'sword',
          mt: 14,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          name: 'Wo Dao',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 9
        },
        {
          name: 'Wo Dao+',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 13
        },
        {
          name: 'Wo Dao+(atk)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2
        },
        {
          name: 'Wo Dao+(spd)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          name: 'Wo Dao+(def)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          name: 'Wo Dao+(res)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          name: 'Armorslayer',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 8,
          anti: 4
        },
        {
          name: 'Armorslayer+',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 12,
          anti: 4
        },
        {
          name: 'Armorsmasher',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 10,
          anti: 4
        },
        {
          name: 'Armorsmasher+',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 14,
          anti: 4
        },
        {
          name: 'Armorsmasher+(eff)',
          description: `Effective against armored foes.
          Neutralizes armored foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'sword',
          mt: 14,
          hp: 3,
          refine: 1,
          anti: 4
        },
        {
          name: 'Armorsmasher+(atk)',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2,
          anti: 4
        },
        {
          name: 'Armorsmasher+(spd)',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          spd: 3,
          refine: 3,
          anti: 4
        },
        {
          name: 'Armorsmasher+(def)',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          def: 4,
          refine: 4,
          anti: 4
        },
        {
          name: 'Armorsmasher+(res)',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          res: 4,
          refine: 5,
          anti: 4
        },
        {
          name: 'Zanbato',
          description: `Effective against cavalry foes.`,
          type: 'sword',
          mt: 10,
          anti: 2
        },
        {
          name: 'Zanbato+',
          description: `Effective against cavalry foes.`,
          type: 'sword',
          mt: 14,
          anti: 2
        },
        {
          name: 'Zanbato+(eff)',
          description: `Effective against cavalry foes.
          Neutralizes cavalry foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'sword',
          mt: 14,
          hp: 3,
          refine: 1,
          anti: 2
        },
        {
          name: 'Zanbato+(atk)',
          description: `Effective against cavalry foes.`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2,
          anti: 2
        },
        {
          name: 'Zanbato+(spd)',
          description: `Effective against cavalry foes.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          spd: 3,
          refine: 3,
          anti: 2
        },
        {
          name: 'Zanbato+(def)',
          description: `Effective against cavalry foes.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          def: 4,
          refine: 4,
          anti: 2
        },
        {
          name: 'Zanbato+(res)',
          description: `Effective against cavalry foes.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          res: 4,
          refine: 5,
          anti: 2
        },
        {
          name: 'Ruby Sword',
          description: `If unit has weapon-triangle advantage, boosts attack by 20%. If unit has weapon-triangle disadvantage, reduces attack by 20%.`,
          type: 'sword',
          mt: 8
        },
        {
          name: 'Ruby Sword+',
          description: `If unit has weapon-triangle advantage, boosts attack by 20%. If unit has weapon-triangle disadvantage, reduces attack by 20%.`,
          type: 'sword',
          mt: 14
        },
        {
          name: 'Firesweep S',
          description: `Unit and foe cannot counterattack.`,
          type: 'sword',
          mt: 11
        },
        {
          name: 'Firesweep S+',
          description: `Unit and foe cannot counterattack.`,
          type: 'sword',
          mt: 15
        },
        {
          name: 'Safeguard',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 10
        },
        {
          name: 'Safeguard+',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 14
        },
        {
          name: 'Safeguard+(atk)',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2
        },
        {
          name: 'Safeguard+(spd)',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          name: 'Safeguard+(def)',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          name: 'Safeguard+(res)',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          name: 'Barrier Blade',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 10
        },
        {
          name: 'Barrier Blade+',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 14
        },
        {
          name: 'Barrier Blade+(atk)',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2
        },
        {
          name: 'Barrier Blade+(spd)',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          name: 'Barrier Blade+(def)',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          name: 'Barrier Blade+(res)',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          name: 'Kadomatsu',
          description: `Grants Def/Res+2 during combat to allies within 2 spaces.`,
          type: 'sword',
          mt: 10
        },
        {
          name: 'Kadomatsu+',
          description: `Grants Def/Res+2 during combat to allies within 2 spaces.`,
          type: 'sword',
          mt: 14
        },
        {
          name: 'Kadomatsu+(atk)',
          description: `Grants Def/Res+2 during combat to allies within 2 spaces.`,
          type: 'sword',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Kadomatsu+(spd)',
          description: `Grants Def/Res+2 during combat to allies within 2 spaces.`,
          type: 'sword',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Kadomatsu+(def)',
          description: `Grants Def/Res+2 during combat to allies within 2 spaces.`,
          type: 'sword',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Kadomatsu+(res)',
          description: `Grants Def/Res+2 during combat to allies within 2 spaces.`,
          type: 'sword',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        // ============= PRF SWORD ============= //
        {
          name: 'Folkvangr',
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Atk+5 for 1 turn.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Folkvangr(eff)',
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Def+7 during combat.
          If unit has weapon-triangle advantage, boosts Atk
          by 20%. If unit has weapon-triangle disadvantage,
          reduces Atk by 20%.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 3,
          refine: 1
        },
        {
          name: 'Folkvangr(atk)',
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Def+7 during combat.`,
          prf: true,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2
        },
        {
          name: 'Folkvangr(spd)',
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Def+7 during combat.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          name: 'Folkvangr(def)',
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Def+7 during combat.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          name: 'Folkvangr(res)',
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Def+7 during combat.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          name: 'Niu',
          description: `Grants Spd+3. Adds 50% of total bonuses on foe to unit\'s Atk/Spd/Def/Res during combat.`,
          prf: true,
          type: 'sword',
          mt: 16,
          spd: 3
        },
        {
          name: 'Laevatein',
          description: `Grants Atk+3. Adds total bonuses on unit to damage dealt.`,
          prf: true,
          type: 'sword',
          mt: 16,
          atk: 3
        },
        {
          name: 'Falchion(Archanea)',
          description: `Effective against dragon foes. At the start of every third turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          anti: 5
        },
        {
          name: 'Falchion(Archanea)(eff)',
          description: `Effective against dragon foes. At the start of every second turn, restores 10 HP.
          Grants Atk/Spd/Def/Res+2 to allies within 2 spaces during combat.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 3,
          refine: 1,
          anti: 5
        },
        {
          name: 'Falchion(Archanea)(atk)',
          description: `Effective against dragon foes. At the start of every second turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2,
          anti: 5
        },
        {
          name: 'Falchion(Archanea)(spd)',
          description: `Effective against dragon foes. At the start of every second turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          spd: 3,
          refine: 3,
          anti: 5
        },
        {
          name: 'Falchion(Archanea)(def)',
          description: `Effective against dragon foes. At the start of every second turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          def: 4,
          refine: 4,
          anti: 5
        },
        {
          name: 'Falchion(Archanea)(res)',
          description: `Effective against dragon foes. At the start of every second turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          res: 4,
          refine: 5,
          anti: 5
        },
        {
          name: 'Exalted Falchion',
          description: `Effective against dragon foes. Grants Spd+3. Grants bonus to Atk/Spd/Def/Res = current bonus on each of unit\'s stats. (each stat calculated independently)`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          spd: 3,
          anti: 5
        },
        {
          name: 'Wing Sword',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'sword',
          mt: 16,
          anti: 7
        },
        {
          name: 'Wing Sword(eff)',
          description: `Effective against armored and cavalry foes.
          If unit\'s Spd - foe\'s Spd ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 3,
          refine: 1,
          anti: 7
        },
        {
          name: 'Wing Sword(atk)',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2,
          anti: 7
        },
        {
          name: 'Wing Sword(spd)',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          spd: 3,
          refine: 3,
          anti: 7
        },
        {
          name: 'Wing Sword(def)',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          def: 4,
          refine: 4,
          anti: 7
        },
        {
          name: 'Wing Sword(res)',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          res: 4,
          refine: 5,
          anti: 7
        },
        {
          name: 'Falchion(Valentia)',
          description: `Effective against dragon foes. At the start of every third turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          anti: 5
        },
        {
          name: 'Falchion(Valentia)(eff)',
          description: `Effective against dragon foes. At the start of every second turn, restores 10 HP.
          If unit\'s HP = 100% at the start of combat and unit initiates combat, unit attacks twice then takes 5 damage after combat.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 3,
          refine: 1,
          anti: 5
        },
        {
          name: 'Falchion(Valentia)(atk)',
          description: `Effective against dragon foes. At the start of every second turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2,
          anti: 5
        },
        {
          name: 'Falchion(Valentia)(spd)',
          description: `Effective against dragon foes. At the start of every second turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          spd: 3,
          refine: 3,
          anti: 5
        },
        {
          name: 'Falchion(Valentia)(def)',
          description: `Effective against dragon foes. At the start of every second turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          def: 4,
          refine: 4,
          anti: 5
        },
        {
          name: 'Falchion(Valentia)(res)',
          description: `Effective against dragon foes. At the start of every second turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          res: 4,
          refine: 5,
          anti: 5
        },
        {
          name: 'Beloved Zofia',
          description: `Grants Def+3. If unit\'s HP = 100% at the start of combat, grants Atk/Spd/Def/Res+4, but if unit attacked, unit takes 4 damage after combat.`,
          prf: true,
          type: 'sword',
          mt: 16,
          def: 3
        },
        {
          name: 'Royal Sword',
          description: `Grants Spd+3. If unit is within 2 spaces of an ally, grants unit Special cooldown charge +1 per unit\'s attack. (Only highest value applied. Does not stack.)`,
          prf: true,
          type: 'sword',
          mt: 16,
          spd: 3
        },
        {
          name: 'Golden Dagger',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Golden Dagger(eff)',
          description: `Accelerates Special trigger (cooldown count-1).
          At start of combat, if Special is ready, grants Atk/Spd/Def/Res+3 during combat and unit can counterattack regardless of foe\'s range.`,
          prf: true,
          type: 'sword',
          mt: 16,
          refine: 1
        },
        {
          name: 'Golden Dagger(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2
        },
        {
          name: 'Golden Dagger(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          name: 'Golden Dagger(def)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          name: 'Golden Dagger(res)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          name: 'Divine Tyrfing',
          description: `Grants Res+3. If in combat against foe using magic, unit receives 50% less damage from the first attack.`,
          prf: true,
          type: 'sword',
          mt: 16,
          res: 3
        },
        {
          name: 'Ayra\'s Blade',
          description: `Grants Spd+3. If unit\'s Spd - foe\'s Spd ≥ 1, gain Special cooldown charge +1 per attack. (If similar skill used, only highest value applied.)`,
          prf: true,
          type: 'sword',
          mt: 16,
          spd: 3
        },
        {
          name: 'Mystletainn',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Mystletainn(eff)',
          description: `Accelerates Special trigger (cooldown count-1).
          Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat.`,
          prf: true,
          type: 'sword',
          mt: 19,
          hp: 3,
          spd: 3,
          def: 3,
          res: 3,
          refine: 1
        },
        {
          name: 'Mystletainn(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2
        },
        {
          name: 'Mystletainn(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          name: 'Mystletainn(def)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          name: 'Mystletainn(res)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          name: 'Tyrfing',
          description: `Grants Def+4 in battle if unit\'s HP ≤ 50%.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Dark Mystletainn',
          description: `Accelerates Special trigger (cooldown count-1). If Special triggers before or during combat, grants Special cooldown count-2 after combat.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Light Brand',
          description: `Grants Def+3. If foe\'s Def ≥ foe\'s Res+5, deals +7 damage.`,
          prf: true,
          type: 'sword',
          mt: 16,
          def: 3
        },
        {
          name: 'Meisterschwert',
          description: `Inflicts Spd-5. Unit attacks twice. (Even if foe initiates combat, unit attacks twice.`,
          prf: true,
          type: 'sword',
          mt: 11,
          spd: -5
        },
        {
          name: 'Binding Blade',
          description: `Grants Def/Res+2 when this unit is attacked.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Binding Blade(eff)',
          description: `Grants Def/Res+4 when this unit is attacked.
          Unit automatically makes a follow-up attack if attacked at HP ≥ 50%.`,
          prf: true,
          type: 'sword',
          refine: 1,
          mt: 16,
          hp: 3,
          anti: 5
        },
        {
          name: 'Binding Blade(atk)',
          description: `Grants Def/Res+4 when this unit is attacked.`,
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 18,
          hp: 5,
          anti: 5
        },
        {
          name: 'Binding Blade(spd)',
          description: `Grants Def/Res+4 when this unit is attacked.`,
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3,
          anti: 5
        },
        {
          name: 'Binding Blade(def)',
          description: `Grants Def/Res+4 when this unit is attacked.`,
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4,
          anti: 5
        },
        {
          name: 'Binding Blade(res)',
          description: `Grants Def/Res+4 when this unit is attacked.`,
          prf: true,
          type: 'sword',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4,
          anti: 5
        },
        {
          name: 'Blazing Durandal',
          description: `Grants Atk+3. If unit\'s Atk > foe\'s Atk, unit gains Special cooldown charge +1.`,
          prf: true,
          type: 'sword',
          mt: 19
        },
        {
          name: 'Eckesachs',
          description: `Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Eckesachs(eff)',
          description: `Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions.
          If unit is attacked by foe using bow, dagger, magic, or staff, unit receives Def/Res+6 during combat.`,
          prf: true,
          type: 'sword',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Eckesachs(atk)',
          description: `Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions.`,
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Eckesachs(spd)',
          description: `Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions.`,
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Eckesachs(def)',
          description: `Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions.`,
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Eckesachs(res)',
          description: `Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions.`,
          prf: true,
          type: 'sword',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Nameless Blade',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Nameless Blade(eff)',
          description: `Accelerates Special trigger (cooldown count-1).
          Deals +10 to damage when Special triggers.`,
          prf: true,
          type: 'sword',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Nameless Blade(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Nameless Blade(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Nameless Blade(def)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Nameless Blade(res)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Durandal',
          description: `Grants Atk+4 during combat if unit initiates attack.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Sol Katti',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Sol Katti(eff)',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.
          If unit initiates combat against foe that can counter and unit's HP ≤ 75%, unit makes a guaranteed follow-up attack.`,
          prf: true,
          type: 'sword',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Sol Katti(atk)',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.`,
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Sol Katti(spd)',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.`,
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Sol Katti(def)',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.`,
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Sol Katti(res)',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.`,
          prf: true,
          type: 'sword',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Vassal\'s Blade',
          description: `Accelerates Special trigger (cooldown count-1). If unit\'s Spd > foe\'s Spd, boosts damage dealt by 70% of difference between stats. (Maximum bonus of +7 damage from a Speed difference of 10. Does account for Phantom Speed.)`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Regal Blade',
          description: `If foe\'s HP is 100% when combat starts, unit receives Atk/Spd+2, during combat.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Regal Blade(eff)',
          description: `If foe\'s HP is 100% when combat starts, unit receives Atk/Spd+3, during combat.
          If unit is within 2 spaces of an infantry magic ally, grants Atk/Spd/Def/Res+3 during combat.`,
          prf: true,
          type: 'sword',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Regal Blade(atk)',
          description: `If foe\'s HP is 100% when combat starts, unit receives Atk/Spd+3, during combat.`,
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 18,
          hp: 3
        },
        {
          name: 'Regal Blade(spd)',
          description: `If foe\'s HP is 100% when combat starts, unit receives Atk/Spd+3, during combat.`,
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Regal Blade(def)',
          description: `If foe\'s HP is 100% when combat starts, unit receives Atk/Spd+3, during combat.`,
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Regal Blade(res)',
          description: `If foe\'s HP is 100% when combat starts, unit receives Atk/Spd+3, during combat.`,
          prf: true,
          type: 'sword',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Sieglinde',
          description: `Grants adjacent allies Atk+3 through their next actions at the start of each turn.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Sieglinde(eff)',
          description: `At start of turn, grants adjacent allies Atk+4 for 1 turn.
          During combat, grants bonus to Atk/Spd/Def/Res = highest bonus on allies within 2 spaces. Each stat bonus calculated independently.`,
          prf: true,
          type: 'sword',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Sieglinde(atk)',
          description: `At start of turn, grants adjacent allies Atk+4 for 1 turn.`,
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 18,
          hp: 3
        },
        {
          name: 'Sieglinde(spd)',
          description: `At start of turn, grants adjacent allies Atk+4 for 1 turn.`,
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Sieglinde(def)',
          description: `At start of turn, grants adjacent allies Atk+4 for 1 turn.`,
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Sieglinde(res)',
          description: `At start of turn, grants adjacent allies Atk+4 for 1 turn.`,
          prf: true,
          type: 'sword',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Storm Sieglinde',
          description: `Grants Atk+3. If number of foes within 2 spaces (excluding target) ≥ number of allies within 2 spaces (excluding unit), grants Def/Res+3 and special cooldown charge +1 during unit\'s attack during combat. (Only highest value applied. Does not stack.)`,
          prf: true,
          type: 'sword',
          mt: 19
        },
        {
          name: 'Audhulma',
          description: `Accelerates Special trigger (cooldown count-1). Grants Res+5.`,
          prf: true,
          type: 'sword',
          mt: 16,
          res: 5
        },
        {
          name: 'Ragnell',
          description: `Enables counterattack regardless of distance if this unit is attacked.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Resolute Blade',
          description: `Grants Atk+3. Deals +10 to damage when Special triggers.`,
          prf: true,
          type: 'sword',
          mt: 19
        },
        {
          name: 'Amiti',
          description: `Spd-2. Attack twice when initiating combat.`,
          prf: true,
          type: 'sword',
          mt: 11,
          spd: -2
        },
        {
          name: 'Alondite',
          description: `Enables counterattack regardless of distance if this unit is attacked`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Falchion(Awakening)',
          description: `At the start of every third turn, unit recovers 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          anti: 5
        },
        {
          name: 'Falchion(Awakening)(eff)',
          description: `At the start of every second turn, unit recovers 10 HP.
          Grants Atk/Spd/Def/Res+4 during combat if unit is adjacent to an ally.`,
          prf: true,
          type: 'sword',
          refine: 1,
          mt: 16,
          hp: 3,
          anti: 5
        },
        {
          name: 'Falchion(Awakening)(atk)',
          description: `At the start of every second turn, unit recovers 10 HP.`,
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 18,
          hp: 5,
          anti: 5
        },
        {
          name: 'Falchion(Awakening)(spd)',
          description: `At the start of every second turn, unit recovers 10 HP.`,
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3,
          anti: 5
        },
        {
          name: 'Falchion(Awakening)(def)',
          description: `At the start of every second turn, unit recovers 10 HP.`,
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4,
          anti: 5
        },
        {
          name: 'Falchion(Awakening)(res)',
          description: `At the start of every second turn, unit recovers 10 HP.`,
          prf: true,
          type: 'sword',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4,
          anti: 5
        },
        {
          name: 'Sealed Falchion',
          description: `If unit\'s HP<100% at start of combat, grants Atk/Spd/Def/Res+5 during combat.`,
          prf: true,
          type: 'sword',
          mt: 16,
          anti: 5
        },
        {
          name: 'Solitary Blade',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Solitary Blade(eff)',
          description: `Accelerates Special trigger (cooldown count-1).
          Grants Atk/Spd+5. Inflicts Def/Res-5.`,
          prf: true,
          type: 'sword',
          refine: 1,
          mt: 21,
          hp: 3,
          spd: 5,
          def: -5,
          res: -5
        },
        {
          name: 'Solitary Blade(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Solitary Blade(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Solitary Blade(def)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Solitary Blade(res)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Skuld',
          description: `If Sing or Dance is used, grants Atk/Spd/Def/Res+3 to target.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Missiletainn(Dark)',
          description: `Accelerates Special triger (cooldown count-1). Grants Special cooldown charge+1 per foe\'s attack during combat. (Does not stack. Special cooldown charge granted even if foe\'s attack deals 0 damage.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Yato',
          description: `Grants Spd+4 during combat if unit initiates attack`,
          prf: true,
          type: 'sword',
          mt: 16,
        },
        {
          name: 'Yato(eff)',
          description: `Grants Atk/Spd/Def/Res+2.
          If unit is within 2 spaces of support partner, grants Atk/Spd/Def/Res+4 to ally during combat.`,
          prf: true,
          type: 'sword',
          refine: 1,
          mt: 18,
          hp: 3,
          spd: 2,
          def: 2,
          res: 2
        },
        {
          name: 'Yato(atk)',
          description: `Grants Atk/Spd/Def/Res+2.`,
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 20,
          hp: 5,
          spd: 2,
          def: 2,
          res: 2
        },
        {
          name: 'Yato(spd)',
          description: `Grants Atk/Spd/Def/Res+2.`,
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 18,
          hp: 5,
          spd: 5,
          def: 2,
          res: 2
        },
        {
          name: 'Yato(def)',
          description: `Grants Atk/Spd/Def/Res+2.`,
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 18,
          hp: 5,
          spd: 2,
          def: 6,
          res: 2
        },
        {
          name: 'Yato(res)',
          description: `Grants Atk/Spd/Def/Res+2.`,
          prf: true,
          type: 'sword',
          refine: 5,
          mt: 18,
          hp: 5,
          spd: 2,
          def: 2,
          res: 6
        },
        {
          name: 'Raijinto',
          description: `Enables counterattack regardless of distance if this unit is attacked.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Siegfried',
          description: `Enables counterattack regardless of distance if this unit is attacked.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Dark Greatsword',
          description: `Atk/Spd+4 during combat if unit initiates combat.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Gjoll',
          description: `Grants Atk+3. If a penalty inflicted by a skill like Panic or Threaten and/or a negative status effect (preventing counterattack or restricted movement) is active on a foe, unit makes a guaranteed follow-up attack and foe cannot.`,
          prf: true,
          type: 'sword',
          mt: 19
        },
        // ============== TOME(R) ============== //
        {
          name: 'Fire',
          description: ``,
          type: 'red tome',
          mt: 4
        },
        {
          name: 'Elfire',
          description: ``,
          type: 'red tome',
          mt: 6
        },
        {
          name: 'Bolganone',
          description: ``,
          type: 'red tome',
          mt: 9
        },
        {
          name: 'Bolganone+',
          description: ``,
          type: 'red tome',
          mt: 13
        },
        {
          name: 'Bolganone+(atk)',
          description: ``,
          type: 'red tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Bolganone+(spd)',
          description: ``,
          type: 'red tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Bolganone+(def)',
          description: ``,
          type: 'red tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Bolganone+(res)',
          description: ``,
          type: 'red tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Flux',
          description: ``,
          type: 'red tome',
          mt: 4
        },
        {
          name: 'Ruin',
          description: ``,
          type: 'red tome',
          mt: 6
        },
        {
          name: 'Fenrir',
          description: ``,
          type: 'red tome',
          mt: 9
        },
        {
          name: 'Fenrir+',
          description: ``,
          type: 'red tome',
          mt: 13
        },
        {
          name: 'Fenrir+(atk)',
          description: ``,
          type: 'red tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Fenrir+(spd)',
          description: ``,
          type: 'red tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Fenrir+(def)',
          description: ``,
          type: 'red tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Fenrir+(res)',
          description: ``,
          type: 'red tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Candelabra',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'red tome',
          mt: 8
        },
        {
          name: 'Candelabra+',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'red tome',
          mt: 12
        },
        {
          name: 'Candelabra+(atk)',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'red tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Candelabra+(spd)',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'red tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Candelabra+(def)',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'red tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Candelabra+(res)',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'red tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Raudrwolf',
          description: `Effective against cavalry foes.`,
          type: 'red tome',
          mt: 6,
          anti: 2
        },
        {
          name: 'Raudrwolf+',
          description: `Effective against cavalry foes.`,
          type: 'red tome',
          mt: 10,
          anti: 2
        },
        {
          name: 'Keen Raudrwolf',
          description: `Effective against cavalry foes.`,
          type: 'red tome',
          mt: 18,
          anti: 2
        },
        {
          name: 'Keen Raudrwolf+',
          description: `Effective against cavalry foes.`,
          type: 'red tome',
          mt: 12,
          anti: 2
        },
        {
          name: 'Keen Raudrwolf+(eff)',
          description: `Effective against cavalry foes.
          If in combat against a cavalry foe, nullifies foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'red tome',
          refine: 1,
          mt: 12,
          anti: 2
        },
        {
          name: 'Keen Raudrwolf+(atk)',
          description: `Effective against cavalry foes.`,
          type: 'red tome',
          refine: 2,
          mt: 13,
          hp: 2,
          anti: 2
        },
        {
          name: 'Keen Raudrwolf+(spd)',
          description: `Effective against cavalry foes.`,
          type: 'red tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2,
          anti: 2
        },
        {
          name: 'Keen Raudrwolf+(def)',
          description: `Effective against cavalry foes.`,
          type: 'red tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3,
          anti: 2
        },
        {
          name: 'Keen Raudrwolf+(res)',
          description: `Effective against cavalry foes.`,
          type: 'red tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3,
          anti: 2
        },
        {
          name: 'Raudrblade',
          description: `Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.`,
          type: 'red tome',
          mt: 9
        },
        {
          name: 'Raudrblade+',
          description: `Slows special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.`,
          type: 'red tome',
          mt: 13
        },
        {
          name: 'Raudrowl',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of allies x 2.`,
          type: 'red tome',
          mt: 6
        },
        {
          name: 'Raudrowl+',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of allies x 2.`,
          type: 'red tome',
          mt: 10
        },
        {
          name: 'Raudrowl+(atk)',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of allies x 2.`,
          type: 'red tome',
          refine: 2,
          mt: 12,
          hp: 2
        },
        {
          name: 'Raudrowl+(spd)',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of allies x 2.`,
          type: 'red tome',
          refine: 3,
          mt: 11,
          hp: 2,
          spd: 2
        },
        {
          name: 'Raudrowl+(def)',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of allies x 2.`,
          type: 'red tome',
          refine: 4,
          mt: 11,
          hp: 2,
          def: 3
        },
        {
          name: 'Raudrowl+(res)',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of allies x 2.`,
          type: 'red tome',
          refine: 5,
          mt: 11,
          hp: 2,
          res: 3
        },
        {
          name: 'Raudrraven',
          description: `Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.`,
          type: 'red tome',
          mt: 7
        },
        {
          name: 'Raudrraven+',
          description: `Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.`,
          type: 'red tome',
          mt: 11
        },
        {
          name: 'Tomato Tome',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'red tome',
          mt: 8
        },
        {
          name: 'Tomato Tome+',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'red tome',
          mt: 12
        },
        {
          name: 'Tomato Tome+(atk)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'red tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Tomato Tome+(spd)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'red tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Tomato Tome+(def)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'red tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Tomato Tome+(res)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'red tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        // ============ PRF TOME(R)============= //
        {
          name: 'Reese\'s Tome',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of adjacent allies x 2.`,
          prf: true,
          type: 'red tome',
          mt: 14
        },
        {
          name: 'Reese\'s Tome(eff)',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of adjacent allies x 2.
          At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd/Res-4 until the end of foe\'s next action.`,
          prf: true,
          type: 'red tome',
          refine: 1,
          mt: 14
        },
        {
          name: 'Reese\'s Tome(atk)',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of adjacent allies x 2.`,
          prf: true,
          type: 'red tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Reese\'s Tome(spd)',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of adjacent allies x 2.`,
          prf: true,
          type: 'red tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Reese\'s Tome(def)',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of adjacent allies x 2.`,
          prf: true,
          type: 'red tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Reese\'s Tome(res)',
          description: `During combat, unit\'s Atk/Spd/Def/Res boosted by number of adjacent allies x 2.`,
          prf: true,
          type: 'red tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Ragnarok',
          description: `If unit has 100% HP at the start of combat, unit receives Atk/Spd+5. If unit initiated combat, unit will receive 5 damage after combat.`,
          prf: true,
          type: 'red tome',
          mt: 14
        },
        {
          name: 'Ragnarok(eff)',
          description: `Grants Atk/Spd+5 during combat. If unit initiated combat, unit will receive 5 damage after combat.
          If unit\'s HP ≤ 80% at the start of combat, Atk/Spd+7 during combat.`,
          prf: true,
          type: 'red tome',
          refine: 1,
          mt: 14
        },
        {
          name: 'Ragnarok(atk)',
          description: `Grants Atk/Spd+5 during combat. If unit initiated combat, unit will receive 5 damage after combat.`,
          prf: true,
          type: 'red tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Ragnarok(spd)',
          description: `Grants Atk/Spd+5 during combat. If unit initiated combat, unit will receive 5 damage after combat.`,
          prf: true,
          type: 'red tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Ragnarok(def)',
          description: `Grants Atk/Spd+5 during combat. If unit initiated combat, unit will receive 5 damage after combat.`,
          prf: true,
          type: 'red tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Ragnarok(res)',
          description: `Grants Atk/Spd+5 during combat. If unit initiated combat, unit will receive 5 damage after combat.`,
          prf: true,
          type: 'red tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Valflame',
          description: `At start of turn, all foes in cardinal direction with Res 1 or more lower than unit suffer Atk/Res-4 until the end of foe\'s next turn.`,
          prf: true,
          type: 'red tome',
          mt: 14
        },
        {
          name: 'Loptous',
          description: `Grants Res+3. Skills with \"effective against dragons\" are effective against unit. If foe has no skills with \"effective against dragons,\" inflicts Atk-6 on foe during combat.`,
          prf: true,
          type: 'red tome',
          mt: 14
        },
        {
          name: 'Forblaze',
          description: `At the start of each turn, inflicts Res-6 on foe on the enemy team with the highest Res through its next action.`,
          prf: true,
          type: 'red tome',
          mt: 14
        },
        {
          name: 'Forblaze(eff)',
          description: `At the start of each turn, inflicts Res-7 on foe on the enemy team with the highest Res through its next action.
          Grants Atk+6 during combat if unit initiates the attack.`,
          prf: true,
          type: 'red tome',
          refine: 1,
          mt: 14
        },
        {
          name: 'Forblaze(atk)',
          description: `At the start of each turn, inflicts Res-7 on foe on the enemy team with the highest Res through its next action.`,
          prf: true,
          type: 'red tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Forblaze(spd)',
          description: `At the start of each turn, inflicts Res-7 on foe on the enemy team with the highest Res through its next action.`,
          prf: true,
          type: 'red tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Forblaze(def)',
          description: `At the start of each turn, inflicts Res-7 on foe on the enemy team with the highest Res through its next action.`,
          prf: true,
          type: 'red tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Forblaze(res)',
          description: `At the start of each turn, inflicts Res-7 on foe on the enemy team with the highest Res through its next action.`,
          prf: true,
          type: 'red tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Gleipnir',
          description: `Grants Res+3. If foe\'s HP = 100% at start of combat, grants Atk/Spd+3 during combat.`,
          prf: true,
          type: 'red tome',
          mt: 14,
          res: 3
        },
        {
          name: 'Fruit of Idunn',
          description: `Grants Spd+3. If unit has HP ≥ 50%, allies within 2 spaces can move to a space adjacent to unit.`,
          prf: true,
          type: 'red tome',
          mt: 14,
          spd: 3
        },
        {
          name: 'Naglfar',
          description: `Grants weapon advantage vs. colorless foes.`,
          prf: true,
          type: 'red tome',
          mt: 14,
        },
        {
          name: 'Dawn Suzu',
          description: `Grants Atk+3. Disables unit\'s and foe\'s skills that change attack priority.`,
          prf: true,
          type: 'red tome',
          mt: 17,
          anti: 7
        },
        {
          name: 'Fruit of Idunn',
          description: `Grants Spd+3. If unit has HP ≥ 50%, allies within 2 spaces can move to a space adjacent to unit.`,
          prf: true,
          type: 'red tome',
          mt: 14
        },
        {
          name: 'Cymbeline',
          description: `Grants adjacent allies Atk+4 through their next action after any combat this unit initiates.`,
          prf: true,
          type: 'red tome',
          mt: 14
        },
        {
          name: 'Cymbeline(eff)',
          description: `Grants allies within 2 spaces Atk+3 during combat.
          Grants Atk/Res+5 during combat if within 2 spaces of a flying ally.`,
          prf: true,
          type: 'red tome',
          refine: 1,
          mt: 14,
        },
        {
          name: 'Cymbeline(atk)',
          description: `Grants allies within 2 spaces Atk+3 during combat.`,
          prf: true,
          type: 'red tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Cymbeline(spd)',
          description: `Grants allies within 2 spaces Atk+3 during combat.`,
          prf: true,
          type: 'red tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Cymbeline(def)',
          description: `Grants allies within 2 spaces Atk+3 during combat.`,
          prf: true,
          type: 'red tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Cymbeline(res)',
          description: `Grants allies within 2 spaces Atk+3 during combat.`,
          prf: true,
          type: 'red tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Muspell Fireposy',
          description: `Grants Spd+3. During combat, unit\'s Atk/Spd boosted by number of allies within 2 spaces x 2. (Maximum bonus of +6 to each stat.`,
          prf: true,
          type: 'red tome',
          mt: 14,
          spd: 3
        },
        {
          name: 'Aversa\'s Night',
          description: `Grants Res+3. If any foe\'s HP ≤ unit\'s HP -3 and that foe is adjacent to another foe, inflicts Atk/Spd/Def/Res-3 on that foe and bonuses on that foe become penalties through that foe\'s next action.`,
          prf: true,
          type: 'red tome',
          mt: 14,
          res: 3
        },
        {
          name: 'Grimoire',
          description: `If unit has ≥ 50% HP, unit can move to a space adjacent to any ally within 2 spaces.`,
          prf: true,
          type: 'red tome',
          mt: 14
        },
        {
          name: 'Grima\'s Truth',
          description: `Grants Def+3. After combat, if unit attacked, inflicts Atk/Spd-5 on target and foes within two spaces of target through their next actions and grants Atk/Spd+5 to unit and allies within two spaces of unit for 1 turn.`,
          prf: true,
          type: 'red tome',
          mt: 14,
          def: 3
        },
        {
          name: 'Book of Dreams',
          description: `Grants Atk+3. If unit is adjacent to ally, inflicts Atk/Spd/Def/Res-4 on foe during combat.`,
          prf: true,
          type: 'red tome',
          mt: 17
        },
        {
          name: 'Brynhildr',
          description: `If unit initiates attack, restricts foe\'s next turn movement to 1 space or less.`,
          prf: true,
          type: 'red tome',
          mt: 14
        },
        {
          name: 'Brynhildr(eff)',
          description: `If in combat against magic foe, reduces damage from foe\'s first attack by 30%.
          If foe uses bow, dagger, magic, or staff and unit\'s Def ≥ foe\'s Def+1, foe cannot make a follow-up attack.`,
          prf: true,
          type: 'red tome',
          refine: 1,
          mt: 14
        },
        {
          name: 'Brynhildr(atk)',
          description: `If in combat against magic foe, reduces damage from foe\'s first attack by 30%.`,
          prf: true,
          type: 'red tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Brynhildr(spd)',
          description: `If in combat against magic foe, reduces damage from foe\'s first attack by 30%.`,
          prf: true,
          type: 'red tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Brynhildr(def)',
          description: `If in combat against magic foe, reduces damage from foe\'s first attack by 30%.`,
          prf: true,
          type: 'red tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Brynhildr(res)',
          description: `If in combat against magic foe, reduces damage from foe\'s first attack by 30%.`,
          prf: true,
          type: 'red tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Imhullu',
          description: `Grants Res+3. At the start of turn 3, deals 5 damage to non-magic foes within 5 columns centered on unit, and inflicts status on those foes preventing counterattack through their next actions.`,
          prf: true,
          type: 'red tome',
          mt: 14,
          res: 3
        },
        // =============== LANCE =============== //
        {
          name: 'Iron Lance',
          description: ``,
          type: 'lance',
          mt: 6
        },
        {
          name: 'Steel Lance',
          description: ``,
          type: 'lance',
          mt: 8
        },
        {
          name: 'Silver Lance',
          description: ``,
          type: 'lance',
          mt: 11
        },
        {
          name: 'Silver Lance+',
          description: ``,
          type: 'lance',
          mt: 15
        },
        {
          name: 'Silver Lance+(atk)',
          description: ``,
          type: 'lance',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Silver Lance+(spd)',
          description: ``,
          type: 'lance',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Silver Lance+(def)',
          description: ``,
          type: 'lance',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Silver Lance+(res)',
          description: ``,
          type: 'lance',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Sapphire Lance',
          description: `If unit has weapon-triangle advantage, boosts attack by 20%. If unit has weapon-triangle disadvantage, reduces attack by 20%.`,
          type: 'lance',
          mt: 8
        },
        {
          name: 'Sapphire Lance+',
          description: `If unit has weapon-triangle advantage, boosts attack by 20%. If unit has weapon-triangle disadvantage, reduces attack by 20%.`,
          type: 'lance',
          mt: 14
        },
        {
          name: 'Killer Lance',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'lance',
          mt: 7
        },
        {
          name: 'Killer Lance+',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'lance',
          mt: 11
        },
        {
          name: 'Slaying Lance',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'lance',
          mt: 10
        },
        {
          name: 'Slaying Lance+',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'lance',
          mt: 14
        },
        {
          name: 'Slaying Lance+(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Slaying Lance+(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Slaying Lance+(def)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Slaying Lance+(res)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Heavy Spear',
          description: `Effective against armored foes.`,
          type: 'lance',
          mt: 8,
          anti: 4
        },
        {
          name: 'Heavy Spear+',
          description: `Effective against armored foes.`,
          type: 'lance',
          mt: 12,
          anti: 4
        },
        {
          name: 'Slaying Spear',
          description: `Effective against armored foes.`,
          type: 'lance',
          mt: 10,
          anti: 4
        },
        {
          name: 'Slaying Spear+',
          description: `Effective against armored foes.`,
          type: 'lance',
          mt: 14,
          anti: 4
        },
        {
          name: 'Slaying Spear+(eff)',
          description: `Effective against armored foes.
          If in combat against an armored foe, nullifies foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'lance',
          refine: 1,
          mt: 16,
          hp: 3,
          anti: 4
        },
        {
          name: 'Slaying Spear+(atk)',
          description: `Effective against armored foes.`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5,
          anti: 4
        },
        {
          name: 'Slaying Spear+(spd)',
          description: `Effective against armored foes.`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3,
          anti: 4
        },
        {
          name: 'Slaying Spear+(def)',
          description: `Effective against armored foes.`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4,
          anti: 4
        },
        {
          name: 'Slaying Spear+(res)',
          description: `Effective against armored foes.`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4,
          anti: 4
        },
        {
          name: 'Ridersbane',
          description: `Effective against cavalry foes.`,
          type: 'lance',
          mt: 10,
          anti: 2
        },
        {
          name: 'Ridersbane+',
          description: `Effective against cavalry foes.`,
          type: 'lance',
          mt: 14,
          anti: 2
        },
        {
          name: 'Ridersbane+(eff)',
          description: `Effective against cavalry foes.
          If in combat against an cavalry foe, nullifies foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'lance',
          refine: 1,
          mt: 16,
          hp: 3,
          anti: 2
        },
        {
          name: 'Ridersbane+(atk)',
          description: `Effective against cavalry foes.`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5,
          anti: 2
        },
        {
          name: 'Ridersbane+(spd)',
          description: `Effective against cavalry foes.`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3,
          anti: 2
        },
        {
          name: 'Ridersbane+(def)',
          description: `Effective against cavalry foes.`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4,
          anti: 2
        },
        {
          name: 'Ridersbane+(res)',
          description: `Effective against cavalry foes.`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4,
          anti: 2
        },
        {
          name: 'Berkut\'s Lance',
          description: `Grants Res+4 when the unit is under attack.`,
          type: 'lance',
          mt: 10
        },
        {
          name: 'Berkut\'s Lance+',
          description: `Grants Res+4 when the unit is under attack.`,
          type: 'lance',
          mt: 14
        },
        {
          name: 'Berkut\'s Lance+(atk)',
          description: `Grants Res+7 when the unit is under attack.`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Berkut\'s Lance+(spd)',
          description: `Grants Res+7 when the unit is under attack.`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Berkut\'s Lance+(def)',
          description: `Grants Res+7 when the unit is under attack.`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Berkut\'s Lance+(res)',
          description: `Grants Res+7 when the unit is under attack.`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Brave Lance',
          description: `Spd-5. Attack twice when initiating combat.`,
          type: 'lance',
          mt: 5,
          spd: -5
        },
        {
          name: 'Brave Lance+',
          description: `Spd-5. Attack twice when initiating combat.`,
          type: 'lance',
          mt: 8
        },
        {
          name: 'Casa Blanca',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'lance',
          mt: 10
        },
        {
          name: 'Casa Blanca+',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'lance',
          mt: 14
        },
        {
          name: 'Casa Blanca+(atk)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Casa Blanca+(spd)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Casa Blanca+(def)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Casa Blanca+(res)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Carrot Lance',
          description: `If unit initiates combat, restores 4 HP after combat.`,
          type: 'lance',
          mt: 9
        },
        {
          name: 'Carrot Lance+',
          description: `If unit initiates combat, restores 4 HP after combat.`,
          type: 'lance',
          mt: 13
        },
        {
          name: 'Carrot Lance+(atk)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'lance',
          refine: 2,
          mt: 15,
          hp: 5
        },
        {
          name: 'Carrot Lance+(spd)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'lance',
          refine: 3,
          mt: 13,
          hp: 5,
          spd: 3
        },
        {
          name: 'Carrot Lance+(def)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'lance',
          refine: 4,
          mt: 13,
          hp: 5,
          def: 4
        },
        {
          name: 'Carrot Lance+(res)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'lance',
          refine: 5,
          mt: 13,
          hp: 5,
          res: 4
        },
        {
          name: 'Deft Harpoon',
          description: `If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.`,
          type: 'lance',
          mt: 10
        },
        {
          name: 'Deft Harpoon+',
          description: `If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.`,
          type: 'lance',
          mt: 14
        },
        {
          name: 'Deft Harpoon+(atk)',
          description: `If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Deft Harpoon+(spd)',
          description: `If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Deft Harpoon+(def)',
          description: `If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Deft Harpoon+(res)',
          description: `If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Firesweep Lance',
          description: `Unit and enemies cannot counterattack.`,
          type: 'lance',
          mt: 11
        },
        {
          name: 'Firesweep Lance+',
          description: `Unit and enemies cannot counterattack.`,
          type: 'lance',
          mt: 15
        },
        {
          name: 'First Bite',
          description: `Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.`,
          type: 'lance',
          mt: 10
        },
        {
          name: 'First Bite+',
          description: `Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.`,
          type: 'lance',
          mt: 14
        },
        {
          name: 'First Bite+(atk)',
          description: `After combat, if unit attacked, grants Def/Res+5 to unit and allies within 2 spaces of unit for 1 turn.`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'First Bite+(spd)',
          description: `After combat, if unit attacked, grants Def/Res+5 to unit and allies within 2 spaces of unit for 1 turn.`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'First Bite+(def)',
          description: `After combat, if unit attacked, grants Def/Res+5 to unit and allies within 2 spaces of unit for 1 turn.`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'First Bite+(res)',
          description: `After combat, if unit attacked, grants Def/Res+5 to unit and allies within 2 spaces of unit for 1 turn.`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Harmonic Lance',
          description: `Deals +10 to damage when Special triggers.`,
          type: 'lance',
          mt: 9
        },
        {
          name: 'Harmonic Lance+',
          description: `Deals +10 to damage when Special triggers.`,
          type: 'lance',
          mt: 13
        },
        {
          name: 'Harmonic Lance+(atk)',
          description: `Deals +10 to damage when Special triggers.`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Harmonic Lance+(spd)',
          description: `Deals +10 to damage when Special triggers.`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Harmonic Lance+(def)',
          description: `Deals +10 to damage when Special triggers.`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Harmonic Lance+(res)',
          description: `Deals +10 to damage when Special triggers.`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Reprisal Lance',
          description: `If foe initiates combat, grants Atk+6 during combat.`,
          type: 'lance',
          mt: 10
        },
        {
          name: 'Reprisal Lance+',
          description: `If foe initiates combat, grants Atk+6 during combat.`,
          type: 'lance',
          mt: 14
        },
        {
          name: 'Reprisal Lance+(atk)',
          description: `If foe initiates combat, grants Atk+6 during combat.`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Reprisal Lance+(spd)',
          description: `If foe initiates combat, grants Atk+6 during combat.`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Reprisal Lance+(def)',
          description: `If foe initiates combat, grants Atk+6 during combat.`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Reprisal Lance+(res)',
          description: `If foe initiates combat, grants Atk+6 during combat.`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Shell Lance',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'lance',
          mt: 10
        },
        {
          name: 'Shell Lance+',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'lance',
          mt: 14
        },
        {
          name: 'Shell Lance+(atk)',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Shell Lance+(spd)',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Shell Lance+(def)',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Shell Lance+(res)',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Tannenboom!',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'lance',
          mt: 10
        },
        {
          name: 'Tannenboom!+',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'lance',
          mt: 14
        },
        {
          name: 'Tannenboom!+(atk)',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'lance',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Tannenboom!+(spd)',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'lance',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Tannenboom!+(def)',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'lance',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Tannenboom!+(res)',
          description: `Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat.`,
          type: 'lance',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        // ============= PRF LANCE ============= //
        {
          name: 'Fensalir',
          description: `Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Fensalir(eff)',
          description: `Neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.
          Grants Spd/Def+5 during combat if unit is adjacent to an ally.`,
          prf: true,
          type: 'lance',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Fensalir(atk)',
          description: `Neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          prf: true,
          type: 'lance',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Fensalir(spd)',
          description: `Neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          prf: true,
          type: 'lance',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Fensalir(def)',
          description: `Neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          prf: true,
          type: 'lance',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Fensalir(res)',
          description: `Neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          prf: true,
          type: 'lance',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Leiptr',
          description: `Enables counterattack regardless of distance if this unit is attacked.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Gradivus',
          description: `Enables counterattack regardless of distance if this unit is attacked.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Rhomphaia',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'lance',
          mt: 16,
          anti: 7
        },
        {
          name: 'Rhomphaia(eff)',
          description: `Effective against armored and cavalry foes.
          If unit\'s Spd - foe\'s Spd ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skills, only highest value applied.)`,
          prf: true,
          type: 'lance',
          refine: 1,
          mt: 16,
          hp: 3,
          anti: 7
        },
        {
          name: 'Rhomphaia(atk)',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'lance',
          refine: 2,
          mt: 18,
          hp: 5,
          anti: 7
        },
        {
          name: 'Rhomphaia(spd)',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'lance',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3,
          anti: 7
        },
        {
          name: 'Rhomphaia(def)',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'lance',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4,
          anti: 7
        },
        {
          name: 'Rhomphaia(res)',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'lance',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4,
          anti: 7
        },
        {
          name: 'Gae Bolg',
          description: `In combat against an infantry, armored, or cavalry foe, grants Atk/Def+5 during combat.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Shanna\'s Lance',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Shanna\'s Lance(eff)',
          description: `Accelerates Special trigger (cooldown count-1).
          Deals +10 to damage when Special triggers.`,
          prf: true,
          type: 'lance',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Shanna\'s Lance(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'lance',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Shanna\'s Lance(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'lance',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Shanna\'s Lance(def)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'lance',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Shanna\'s Lance(res)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'lance',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Maltet',
          description: `Accelerates Special trigger (cooldown count-1). If unit\'s HP ≥ 50% and foe initiates attack, unit makes a uaranteed follow-up attack.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Florina\'s Lance',
          description: `Effective against armored foes.`,
          prf: true,
          type: 'lance',
          mt: 16,
          anti: 4
        },
        {
          name: 'Florina\'s Lance(eff)',
          description: `Effective against armored foes.
          If foe initiates combat and uses sword, lance, axe, or dragonstone, grants Atk/Spd/Def/Res+4 during combat.`,
          prf: true,
          type: 'lance',
          refine: 1,
          mt: 16,
          hp: 3,
          anti: 4
        },
        {
          name: 'Florina\'s Lance(atk)',
          description: `Effective against armored foes.`,
          prf: true,
          type: 'lance',
          refine: 2,
          mt: 18,
          hp: 5,
          anti: 4
        },
        {
          name: 'Florina\'s Lance(spd)',
          description: `Effective against armored foes.`,
          prf: true,
          type: 'lance',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3,
          anti: 4
        },
        {
          name: 'Florina\'s Lance(def)',
          description: `Effective against armored foes.`,
          prf: true,
          type: 'lance',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4,
          anti: 4
        },
        {
          name: 'Florina\'s Lance(res)',
          description: `Effective against armored foes.`,
          prf: true,
          type: 'lance',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4,
          anti: 4
        },
        {
          name: 'Siegmund',
          description: `Grants adjacent allies Atk+4 through their next actions at the start of each turn.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Siegmund(eff)',
          description: `Grants adjacent allies Atk+4 through their next actions at the start of each turn.
          If unit initiates combat and unit\'s HP ≥ 90%, unit makes a guaranteed follow-up attack.`,
          prf: true,
          type: 'lance',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Siegmund(atk)',
          description: `Grants adjacent allies Atk+4 through their next actions at the start of each turn.`,
          prf: true,
          type: 'lance',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Siegmund(spd)',
          description: `Grants adjacent allies Atk+4 through their next actions at the start of each turn.`,
          prf: true,
          type: 'lance',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Siegmund(def)',
          description: `Grants adjacent allies Atk+4 through their next actions at the start of each turn.`,
          prf: true,
          type: 'lance',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Siegmund(res)',
          description: `Grants adjacent allies Atk+4 through their next actions at the start of each turn.`,
          prf: true,
          type: 'lance',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Flame Siegmund',
          description: `Grants Atk+3. If the number of foes within 2 spaces (excluding target) ≥ the number of allies (excluding unit), unit makes a guaranteed follow-up attack.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Vidofnir',
          description: `If unit if attacked by foe using sword, lance, or axe, unit receives Def+7 during combat.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Vidofnir(eff)',
          description: `If unit if attacked by foe using sword, lance, axe, or dragonstone, unit receives Def/Res+7 during combat.
          If unit is within 2 spaces of infantry or armored ally, grants Atk/Spd+4 during combat.`,
          prf: true,
          type: 'lance',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Vidofnir(atk)',
          description: `If unit if attacked by foe using sword, lance, axe, or dragonstone, unit receives Def/Res+7 during combat.`,
          prf: true,
          type: 'lance',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Vidofnir(spd)',
          description: `If unit if attacked by foe using sword, lance, axe, or dragonstone, unit receives Def/Res+7 during combat.`,
          prf: true,
          type: 'lance',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Vidofnir(def)',
          description: `If unit if attacked by foe using sword, lance, axe, or dragonstone, unit receives Def/Res+7 during combat.`,
          prf: true,
          type: 'lance',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Vidofnir(res)',
          description: `If unit if attacked by foe using sword, lance, axe, or dragonstone, unit receives Def/Res+7 during combat.`,
          prf: true,
          type: 'lance',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Cursed Lance',
          description: `Accelerates Special trigger (cooldown count-1). Grants Atk/Spd+2. Deals 4 damage to unit after combat.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Dauntless Lance',
          description: `Effective against armored foes. Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'lance',
          mt: 16,
          anti: 4
        },
        {
          name: 'Dauntless Lance(eff)',
          description: `Effective against armored foes. Accelerates Special trigger (cooldown count-1).
          If foe initiates combat, Spd/Def+4 during combat.`,
          prf: true,
          type: 'lance',
          refine: 1,
          mt: 16,
          hp: 3,
          anti: 4
        },
        {
          name: 'Dauntless Lance(atk)',
          description: `Effective against armored foes. Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'lance',
          refine: 2,
          mt: 18,
          hp: 5,
          anti: 4
        },
        {
          name: 'Dauntless Lance(spd)',
          description: `Effective against armored foes. Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'lance',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3,
          anti: 4
        },
        {
          name: 'Dauntless Lance(def)',
          description: `Effective against armored foes. Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'lance',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4,
          anti: 4
        },
        {
          name: 'Dauntless Lance(res)',
          description: `Effective against armored foes. Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'lance',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4,
          anti: 4
        },
        {
          name: 'Geirskogul',
          description: `Grants Def+3. If allies within 2 space use sword lance, axe, bow, or dagger, grants Atk/Spd+3 to those allies during combat.`,
          prf: true,
          type: 'lance',
          mt: 16,
          def: 3
        },
        {
          name: 'Hinoka\'s Spear',
          description: `Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        {
          name: 'Hinoka\'s Spear(eff)',
          description: `Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces.
          Infantry and flying allies within 2 spaces can move to a space adjacent to unit.`,
          prf: true,
          type: 'lance',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Hinoka\'s Spear(atk)',
          description: `Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces.`,
          prf: true,
          type: 'lance',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Hinoka\'s Spear(spd)',
          description: `Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces.`,
          prf: true,
          type: 'lance',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Hinoka\'s Spear(def)',
          description: `Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces.`,
          prf: true,
          type: 'lance',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Hinoka\'s Spear(res)',
          description: `Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces.`,
          prf: true,
          type: 'lance',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Bright Naginata',
          description: `Grants Atk/Def+4 during combat if foe initiates combat.`,
          prf: true,
          type: 'lance',
          mt: 16
        },
        // ============== TOME(B) ============== //
        {
          name: 'Thunder',
          description: ``,
          type: 'blue tome',
          mt: 4
        },
        {
          name: 'Elthunder',
          description: ``,
          type: 'blue tome',
          mt: 6
        },
        {
          name: 'Thoron',
          description: ``,
          type: 'blue tome',
          mt: 9
        },
        {
          name: 'Thoron+',
          description: ``,
          type: 'blue tome',
          mt: 13
        },
        {
          name: 'Thoron+(atk)',
          description: ``,
          type: 'blue tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Thoron+(spd)',
          description: ``,
          type: 'blue tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Thoron+(def)',
          description: ``,
          type: 'blue tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Thoron+(res)',
          description: ``,
          type: 'blue tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Light',
          description: ``,
          type: 'blue tome',
          mt: 4
        },
        {
          name: 'Ellight',
          description: ``,
          type: 'blue tome',
          mt: 6
        },
        {
          name: 'Shine',
          description: ``,
          type: 'blue tome',
          mt: 9
        },
        {
          name: 'Shine+',
          description: ``,
          type: 'blue tome',
          mt: 13
        },
        {
          name: 'Shine+(atk)',
          description: ``,
          type: 'blue tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Shine+(spd)',
          description: ``,
          type: 'blue tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Shine+(def)',
          description: ``,
          type: 'blue tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Shine+(res)',
          description: ``,
          type: 'blue tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Blarblade',
          description: `Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.`,
          type: 'blue tome',
          mt: 9
        },
        {
          name: 'Blarblade+',
          description: `Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.`,
          type: 'blue tome',
          mt: 13
        },
        {
          name: 'Blarowl',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'blue tome',
          mt: 6
        },
        {
          name: 'Blarowl+',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'blue tome',
          mt: 10
        },
        {
          name: 'Blarowl+(atk)',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'blue tome',
          refine: 2,
          mt: 11,
          hp: 2
        },
        {
          name: 'Blarowl+(spd)',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'blue tome',
          refine: 3,
          mt: 10,
          hp: 2,
          spd: 2
        },
        {
          name: 'Blarowl+(def)',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'blue tome',
          refine: 4,
          mt: 10,
          hp: 2,
          def: 3
        },
        {
          name: 'Blarowl+(res)',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'blue tome',
          refine: 5,
          mt: 10,
          hp: 2,
          res: 3
        },
        {
          name: 'Blarraven',
          description: `Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.`,
          type: 'blue tome',
          mt: 7
        },
        {
          name: 'Blarraven+',
          description: `Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.`,
          type: 'blue tome',
          mt: 11
        },
        {
          name: 'Blessed Bouquet',
          description: `Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.`,
          type: 'blue tome',
          mt: 8
        },
        {
          name: 'Blessed Bouquet+',
          description: `Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.`,
          type: 'blue tome',
          mt: 12
        },
        {
          name: 'Blessed Bouquet+(atk)',
          description: `After combat, if unit attacked, grants Def/Res+5 to unit and allies within 2 spaces of unit.`,
          type: 'blue tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Blessed Bouquet+(spd)',
          description: `After combat, if unit attacked, grants Def/Res+5 to unit and allies within 2 spaces of unit.`,
          type: 'blue tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Blessed Bouquet+(def)',
          description: `After combat, if unit attacked, grants Def/Res+5 to unit and allies within 2 spaces of unit.`,
          type: 'blue tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Blessed Bouquet+(res)',
          description: `After combat, if unit attacked, grants Def/Res+5 to unit and allies within 2 spaces of unit.`,
          type: 'blue tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Blue Egg',
          description: `If unit initiates combat, restores 4 HP after combat.`,
          type: 'blue tome',
          mt: 7
        },
        {
          name: 'Blue Egg+',
          description: `If unit initiates combat, restores 4 HP after combat.`,
          type: 'blue tome',
          mt: 11
        },
        {
          name: 'Blue Egg+(atk)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'blue tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Blue Egg+(spd)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'blue tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Blue Egg+(def)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'blue tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Blue Egg+(res)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'blue tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Blue Gift',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'blue tome',
          mt: 8
        },
        {
          name: 'Blue Gift+',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'blue tome',
          mt: 12
        },
        {
          name: 'Blue Gift+(atk)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'blue tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Blue Gift+(spd)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'blue tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Blue Gift+(def)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'blue tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Blue Gift+(res)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'blue tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Dancer\'s Score',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'blue tome',
          mt: 8
        },
        {
          name: 'Dancer\'s Score+',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'blue tome',
          mt: 12
        },
        {
          name: 'Dancer\'s Score+(atk)',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'blue tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Dancer\'s Score+(spd)',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'blue tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Dancer\'s Score+(def)',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'blue tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Dancer\'s Score+(res)',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'blue tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Blarserpent',
          description: `If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.`,
          type: 'blue tome',
          mt: 8
        },
        {
          name: 'Blarserpent+',
          description: `If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.`,
          type: 'blue tome',
          mt: 12
        },
        {
          name: 'Blarserpent+(atk)',
          description: `If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.`,
          type: 'blue tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Blarserpent+(spd)',
          description: `If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.`,
          type: 'blue tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Blarserpent+(def)',
          description: `If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.`,
          type: 'blue tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Blarserpent+(res)',
          description: `If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.`,
          type: 'blue tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Blarwolf',
          description: `Effective against cavalry foes.`,
          type: 'blue tome',
          mt: 6,
          anti: 2
        },
        {
          name: 'Blarwolf+',
          description: `Effective against cavalry foes.`,
          type: 'blue tome',
          mt: 10,
          anti: 2
        },
        {
          name: 'Keen Blarwolf',
          description: `Effective against cavalry foes.`,
          type: 'blue tome',
          mt: 8,
          anti: 2
        },
        {
          name: 'Keen Blarwolf+',
          description: `Effective against cavalry foes.`,
          type: 'blue tome',
          mt: 12,
          anti: 2
        },
        {
          name: 'Keen Blarwolf+(eff)',
          description: `Effective against cavalry foes.
          If in combat against cavalry foe, nullifies foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'blue tome',
          refine: 1,
          mt: 12,
          anti: 2
        },
        {
          name: 'Keen Blarwolf+(atk)',
          description: `Effective against cavalry foes.`,
          type: 'blue tome',
          refine: 2,
          mt: 13,
          hp: 2,
          anti: 2
        },
        {
          name: 'Keen Blarwolf+(spd)',
          description: `Effective against cavalry foes.`,
          type: 'blue tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2,
          anti: 2
        },
        {
          name: 'Keen Blarwolf+(def)',
          description: `Effective against cavalry foes.`,
          type: 'blue tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3,
          anti: 2
        },
        {
          name: 'Keen Blarwolf+(res)',
          description: `Effective against cavalry foes.`,
          type: 'blue tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3,
          anti: 2
        },
        {
          name: 'Fresh Bouquet',
          description: `At start of turn, if unit is adjacent to ally, grants Spd+4 to unit and adjacent allies for 1 turn.`,
          type: 'blue tome',
          mt: 8
        },
        {
          name: 'Fresh Bouquet+',
          description: `At start of turn, if unit is adjacent to ally, grants Spd+4 to unit and adjacent allies for 1 turn.`,
          type: 'blue tome',
          mt: 12
        },
        {
          name: 'Fresh Bouquet+(atk)',
          description: `At start of turn, if unit is adjacent to ally, grants Spd+4 to unit and adjacent allies for 1 turn.`,
          type: 'blue tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Fresh Bouquet+(spd)',
          description: `At start of turn, if unit is adjacent to ally, grants Spd+4 to unit and adjacent allies for 1 turn.`,
          type: 'blue tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Fresh Bouquet+(def)',
          description: `At start of turn, if unit is adjacent to ally, grants Spd+4 to unit and adjacent allies for 1 turn.`,
          type: 'blue tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Fresh Bouquet+(res)',
          description: `At start of turn, if unit is adjacent to ally, grants Spd+4 to unit and adjacent allies for 1 turn.`,
          type: 'blue tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Juicy Wave',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit\'s attack.`,
          type: 'blue tome',
          mt: 8
        },
        {
          name: 'Juicy Wave+',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit\'s attack.`,
          type: 'blue tome',
          mt: 12
        },
        {
          name: 'Juicy Wave+(atk)',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit\'s attack.`,
          type: 'blue tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Juicy Wave+(spd)',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit\'s attack.`,
          type: 'blue tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Juicy Wave+(def)',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit\'s attack.`,
          type: 'blue tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Juicy Wave+(res)',
          description: `If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit\'s attack.`,
          type: 'blue tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Sealife Tome',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'blue tome',
          mt: 8
        },
        {
          name: 'Sealife Tome+',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'blue tome',
          mt: 12
        },
        {
          name: 'Sealife Tome+(atk)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'blue tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Sealife Tome+(spd)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'blue tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Sealife Tome+(def)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'blue tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Sealife Tome+(res)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'blue tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        // ============ PRF TOME(B)============= //
        {
          name: 'Aura',
          description: `Restores 5 HP to adjacent allies after any combat this unit initiates.`,
          prf: true,
          type: 'blue tome',
          mt: 14
        },
        {
          name: 'Aura(eff)',
          description: `At start of turn, grants Atk+6 to adjacent magic and staff allies for 1 turn.
          If unit is within 2 spaces of magic or staff ally, grants Atk/Spd+5 during combat.`,
          prf: true,
          type: 'blue tome',
          refine: 1,
          mt: 14
        },
        {
          name: 'Aura(atk)',
          description: `At start of turn, grants Atk+6 to adjacent magic and staff allies for 1 turn.`,
          prf: true,
          type: 'blue tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Aura(spd)',
          description: `At start of turn, grants Atk+6 to adjacent magic and staff allies for 1 turn.`,
          prf: true,
          type: 'blue tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Aura(def)',
          description: `At start of turn, grants Atk+6 to adjacent magic and staff allies for 1 turn.`,
          prf: true,
          type: 'blue tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Aura(res)',
          description: `At start of turn, grants Atk+6 to adjacent magic and staff allies for 1 turn.`,
          prf: true,
          type: 'blue tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Huginn\'s Egg',
          description: `Grants Res+3. At start of turn if unit\'s HP ≥ 50%, inflicts Atk/Def-5 on foe on the enemy team with the lowest Res through their next action.`,
          prf: true,
          type: 'blue tome',
          mt: 14,
          res: 3
        },
        {
          name: 'Sagittae',
          description: `Grants Def+3. At start of combat, if foe\'s Atk ≥ unit\'s Atk+5, grants Atk/Spd/Def/Res+5 during combat.`,
          prf: true,
          type: 'blue tome',
          mt: 14,
          def: 3
        },
        {
          name: 'Dark Aura',
          description: `At start of turn, if adjacent allies use sword, lance, axe, or dragonstone, grants Atk+6 to those allies for 1 turn.`,
          prf: true,
          type: 'blue tome',
          mt: 14
        },
        {
          name: 'Mjolnir',
          description: `Accelerates Special trigger (cooldown count-1). If unit initiates combat, grants Spd+6 during combat.`,
          prf: true,
          type: 'blue tome',
          mt: 14
        },
        {
          name: 'Dire Thunder',
          description: `Inflicts Spd-5. If unit initiates combat, unit attacks twice.`,
          prf: true,
          type: 'blue tome',
          mt: 9,
          spd: -5
        },
        {
          name: 'Wargod\'s Tome',
          description: `At start of turn, inflicts Atk/Res-4 on foes in cardinal directions with Res < unit\'s Res through their next actions.`,
          prf: true,
          type: 'blue tome',
          mt: 14
        },
        {
          name: 'Weirding Tome',
          description: `Grants Spd+3. At start of turn, inflicts Spd-5 on foes in cardinal directions with Res < unit\'s Res through their next actions.`,
          prf: true,
          type: 'blue tome',
          mt: 14,
          spd: 3
        },
        {
          name: 'Ivaldi',
          description: `Grants Def+3. At start of combat, if foe\'s HP = 100%, grants Atk/Spd+3 during combat.`,
          prf: true,
          type: 'blue tome',
          mt: 14,
          def: 3
        },
        {
          name: 'Thani',
          description: `Effective against armored and cavalry foes. Grants Res+3. If armored or cavalry foe uses bow, dagger, magic, or staff, reduces damage from foe\'s first attack by 30%.`,
          prf: true,
          type: 'blue tome',
          mt: 14,
          res: 3, 
          anti: 7
        },
        {
          name: 'Odin\'s Grimoire',
          description: `Adds total bonuses on unit to damage dealt.`,
          prf: true,
          type: 'blue tome',
          mt: 14
        },
        {
          name: 'Missiletainn(Dusk)',
          description: `Accelerates Special trigger (cooldown count-1). At the start of turn 1, grants Special cooldown count-1 to unit for each magic ally on your team (including unit).`,
          prf: true,
          type: 'blue tome',
          mt: 14
        },
        {
          name: 'Valaskjalf',
          description: `If unit\'s HP ≤ 50% and foe inititates combat, unit can counterattack before foe\'s first attack.`,
          prf: true,
          type: 'blue tome',
          mt: 14
        },
        // ================ AXE ================ //
        {
          name: 'Iron Axe',
          description: ``,
          type: 'axe',
          mt: 6
        },
        {
          name: 'Steel Axe',
          description: ``,
          type: 'axe',
          mt: 8
        },
        {
          name: 'Silver Axe',
          description: ``,
          type: 'axe',
          mt: 11
        },
        {
          name: 'Silver Axe+',
          description: ``,
          type: 'axe',
          mt: 15,
        },
        {
          name: 'Silver Axe+(atk)',
          description: ``,
          type: 'axe',
          mt: 18,
          hp: 5,
          refine: 2
        },
        {
          name: 'Silver Axe+(spd)',
          description: ``,
          type: 'axe',
          mt: 16,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          name: 'Silver Axe+(def)',
          description: ``,
          type: 'axe',
          mt: 16,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          name: 'Silver Axe+(res)',
          description: ``,
          type: 'axe',
          mt: 16,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          name: 'Brave Axe',
          description: `Inflicts Spd-5. If unit initiates combat, unit attacks twice.`,
          type: 'axe',
          mt: 5,
          spd: -5
        },
        {
          name: 'Brave Axe+',
          description: `Inflicts Spd-5. If unit initiates combat, unit attacks twice.`,
          type: 'axe',
          mt: 8,
          spd: -5
        },
        {
          name: 'Ardent Service',
          description: `At start of turn, if unit is adjacent to an ally, grants Atk+4 to unit and adjacent allies for 1 turn.`,
          type: 'axe',
          mt: 10
        },
        {
          name: 'Ardent Service+',
          description: `At start of turn, if unit is adjacent to an ally, grants Atk+4 to unit and adjacent allies for 1 turn.`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Ardent Service+(atk)',
          description: `At start of turn, if unit is adjacent to an ally, grants Atk+4 to unit and adjacent allies for 1 turn.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Ardent Service+(spd)',
          description: `At start of turn, if unit is adjacent to an ally, grants Atk+4 to unit and adjacent allies for 1 turn.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Ardent Service+(def)',
          description: `At start of turn, if unit is adjacent to an ally, grants Atk+4 to unit and adjacent allies for 1 turn.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Ardent Service+(res)',
          description: `At start of turn, if unit is adjacent to an ally, grants Atk+4 to unit and adjacent allies for 1 turn.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Beach Banner',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          mt: 10
        },
        {
          name: 'Beach Banner+',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Beach Banner+(atk)',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Beach Banner+(spd)',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Beach Banner+(def)',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Beach Banner+(res)',
          description: `If unit initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Carrot Axe',
          description: `If unit initiates combat, restores 4 HP after combat.`,
          type: 'axe',
          mt: 9
        },
        {
          name: 'Carrot Axe+',
          description: `If unit initiates combat, restores 4 HP after combat.`,
          type: 'axe',
          mt: 13
        },
        {
          name: 'Carrot Axe+(atk)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Carrot Axe+(spd)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Carrot Axe+(def)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Carrot Axe+(res)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Emerald Axe',
          description: `If unit has weapon-triangle advantage, boosts attack by 20%. If unit has weapon-triangle disadvantage, reduces attack by 20%.`,
          type: 'axe',
          mt: 8
        },
        {
          name: 'Emerald Axe+',
          description: `If unit has weapon-triangle advantage, boosts attack by 20%. If unit has weapon-triangle disadvantage, reduces attack by 20%.`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Giant Spoon',
          description: `Deals +10 damage when Special triggers.`,
          type: 'axe',
          mt: 9
        },
        {
          name: 'Giant Spoon+',
          description: `Deals +10 damage when Special triggers.`,
          type: 'axe',
          mt: 13
        },
        {
          name: 'Giant Spoon+(atk)',
          description: `Deals +10 damage when special triggers.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Giant Spoon+(spd)',
          description: `Deals +10 damage when special triggers.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Giant Spoon+(def)',
          description: `Deals +10 damage when special triggers.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Giant Spoon+(res)',
          description: `Deals +10 damage when special triggers.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Hack-o\'-Lantern',
          description: `Inflicts Special cooldown charge-1 on foe per attack during combat. (Only highest value applied. Does not stack.)`,
          type: 'axe',
          mt: 10
        },
        {
          name: 'Hack-o\'-Lantern+',
          description: `Inflicts Special cooldown charge-1 on foe per attack during combat. (Only highest value applied. Does not stack.)`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Hack-o\'-Lantern+(atk)',
          description: `Inflicts Special cooldown charge-1 on foe per attack during combat. (Only highest value applied. Does not stack.)`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Hack-o\'-Lantern+(spd)',
          description: `Inflicts Special cooldown charge-1 on foe per attack during combat. (Only highest value applied. Does not stack.)`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Hack-o\'-Lantern+(def)',
          description: `Inflicts Special cooldown charge-1 on foe per attack during combat. (Only highest value applied. Does not stack.)`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Hack-o\'-Lantern+(res)',
          description: `Inflicts Special cooldown charge-1 on foe per attack during combat. (Only highest value applied. Does not stack.)`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Hagoita',
          description: `Grants Def/Res+2 to allies within 2 spaces during combat.`,
          type: 'axe',
          mt: 10
        },
        {
          name: 'Hagoita+',
          description: `Grants Def/Res+2 to allies within 2 spaces during combat.`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Hagoita+(atk)',
          description: `Grants Def/Res+2 to allies within 2 spaces during combat.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Hagoita+(spd)',
          description: `Grants Def/Res+2 to allies within 2 spaces during combat.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Hagoita+(def)',
          description: `Grants Def/Res+2 to allies within 2 spaces during combat.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Hagoita+(res)',
          description: `Grants Def/Res+2 to allies within 2 spaces during combat.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Hammer',
          description: `Effective against armored foes.`,
          type: 'axe',
          mt: 8,
          anti: 4
        },
        {
          name: 'Hammer+',
          description: `Effective against armored foes.`,
          type: 'axe',
          mt: 12,
          anti: 4
        },
        {
          name: 'Slaying Hammer',
          description: `Effective against armored foes.`,
          type: 'axe',
          mt: 10,
          anti: 4
        },
        {
          name: 'Slaying Hammer+',
          description: `Effective against armored foes.`,
          type: 'axe',
          mt: 14,
          anti: 4
        },
        {
          name: 'Slaying Hammer+(eff)',
          description: `Effective against armored foes.
          Neutralizes armored foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'axe',
          refine: 1,
          mt: 14,
          hp: 3,
          anti: 4
        },
        {
          name: 'Slaying Hammer+(atk)',
          description: `Effective against armored foes.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5,
          anti: 4
        },
        {
          name: 'Slaying Hammer+(spd)',
          description: `Effective against armored foes.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3,
          anti: 4
        },
        {
          name: 'Slaying Hammer+(def)',
          description: `Effective against armored foes.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4,
          anti: 4
        },
        {
          name: 'Slaying Hammer+(res)',
          description: `Effective against armored foes.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4,
          anti: 4
        },
        {
          name: 'Handbell',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          mt: 10
        },
        {
          name: 'Handbell+',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Handbell+(atk)',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Handbell+(spd)',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Handbell+(def)',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Handbell+(res)',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Killer Axe',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'axe',
          mt: 8
        },
        {
          name: 'Killer Axe+',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'axe',
          mt: 12
        },
        {
          name: 'Slaying Axe',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'axe',
          mt: 10
        },
        {
          name: 'Slaying Axe+',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Slaying Axe+(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Slaying Axe+(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Slaying Axe+(def)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Slaying Axe+(res)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Legion\'s Axe',
          description: `After combat, if unit attacked, converts bonuses on foe into penalties through its next action.`,
          type: 'axe',
          mt: 10
        },
        {
          name: 'Legion\'s Axe+',
          description: `After combat, if unit attacked, converts bonuses on foe into penalties through its next action.`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Legion\'s Axe+(atk)',
          description: `After combat, if unit attacked, converts bonuses on target and foes within 2 spaces of target into penalties through its next action.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Legion\'s Axe+(spd)',
          description: `After combat, if unit attacked, converts bonuses on target and foes within 2 spaces of target into penalties through its next action.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Legion\'s Axe+(def)',
          description: `After combat, if unit attacked, converts bonuses on target and foes within 2 spaces of target into penalties through its next action.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Legion\'s Axe+(res)',
          description: `After combat, if unit attacked, converts bonuses on target and foes within 2 spaces of target into penalties through its next action.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Lilith Floatie',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'axe',
          mt: 10
        },
        {
          name: 'Lilith Floatie+',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Lilith Floatie+(atk)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Lilith Floatie+(spd)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Lilith Floatie+(def)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Lilith Floatie+(res)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Melon Crusher',
          description: `At start of combat, if unit\'s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.`,
          type: 'axe',
          mt: 10
        },
        {
          name: 'Melon Crusher+',
          description: `At start of combat, if unit\'s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Melon Crusher+(atk)',
          description: `At start of combat, if unit\'s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Melon Crusher+(spd)',
          description: `At start of combat, if unit\'s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Melon Crusher+(def)',
          description: `At start of combat, if unit\'s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Melon Crusher+(res)',
          description: `At start of combat, if unit\'s HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Poleaxe',
          description: `Effective against cavalry foes.`,
          type: 'axe',
          mt: 10,
          anti: 2
        },
        {
          name: 'Poleaxe+',
          description: `Effective against cavalry foes.`,
          type: 'axe',
          mt: 14,
          anti: 2
        },
        {
          name: 'Poleaxe+(eff)',
          description: `Effective against cavalry foes.
          Neutralizes cavalry foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'axe',
          refine: 1,
          mt: 14,
          hp: 3,
          anti: 2
        },
        {
          name: 'Poleaxe+(atk)',
          description: `Effective against cavalry foes.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5,
          anti: 2
        },
        {
          name: 'Poleaxe+(spd)',
          description: `Effective against cavalry foes.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3,
          anti: 2
        },
        {
          name: 'Poleaxe+(def)',
          description: `Effective against cavalry foes.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4,
          anti: 2
        },
        {
          name: 'Poleaxe+(res)',
          description: `Effective against cavalry foes.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4,
          anti: 2
        },
        {
          name: 'Sack o\' Gifts',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          mt: 10
        },
        {
          name: 'Sack o\' Gifts+',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          mt: 14
        },
        {
          name: 'Sack o\' Gifts+(atk)',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Sack o\' Gifts+(spd)',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Sack o\' Gifts+(def)',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Sack o\' Gifts+(res)',
          description: `If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Wo Gun',
          description: `Deals +10 damage when Special triggers.`,
          type: 'axe',
          mt: 9
        },
        {
          name: 'Wo Gun+',
          description: `Deals +10 damage when Special triggers.`,
          type: 'axe',
          mt: 13
        },
        {
          name: 'Wo Gun+(atk)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'axe',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Wo Gun+(spd)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'axe',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Wo Gun+(def)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'axe',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Wo Gun+(res)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'axe',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        // ============== PRF AXE ============== //
        {
          name: 'Noatun',
          description: `If unit\'s HP ≤ 40%, unit can move to a space adjacent to any ally.`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Noatun(eff)',
          description: `If unit\'s HP ≤ 50%, unit can move to a space adjacent to any ally.
          If unit\'s HP ≥ 50%, unit can move to a space adjacent to any ally within 2 spaces.`,
          prf: true,
          type: 'axe',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Noatun(atk)',
          description: `If unit\'s HP ≤ 50%, unit can move to a space adjacent to any ally.`,
          prf: true,
          type: 'axe',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Noatun(spd)',
          description: `If unit\'s HP ≤ 50%, unit can move to a space adjacent to any ally.`,
          prf: true,
          type: 'axe',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Noatun(def)',
          description: `If unit\'s HP ≤ 50%, unit can move to a space adjacent to any ally.`,
          prf: true,
          type: 'axe',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Noatun(res)',
          description: `If unit\'s HP ≤ 50%, unit can move to a space adjacent to any ally.`,
          prf: true,
          type: 'axe',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Byleistr',
          description: `At start of odd-numbered turns, grants Atk/Spd/Def/Res+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent)`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Hauteclere',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Hauteclere(eff)',
          description: `Accelerates Special trigger (cooldown count-1).
          Deals +10 damage when Special triggers.`,
          prf: true,
          type: 'axe',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Hauteclere(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'axe',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Hauteclere(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'axe',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Hauteclere(def)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'axe',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Hauteclere(res)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'axe',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Axe of Virility',
          description: `Effective against armored foes.`,
          prf: true,
          type: 'axe',
          mt: 16,
          anti: 4
        },
        {
          name: 'Axe of Virility(eff)',
          description: `Effective against armored foes.
          Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat.`,
          prf: true,
          type: 'axe',
          refine: 1,
          mt: 19,
          hp: 3,
          spd: 3,
          def: 3,
          res: 3,
          anti: 4
        },
        {
          name: 'Axe of Virility(atk)',
          description: `Effective against armored foes.`,
          prf: true,
          type: 'axe',
          refine: 2,
          mt: 18,
          hp: 5,
          anti: 4
        },
        {
          name: 'Axe of Virility(spd)',
          description: `Effective against armored foes.`,
          prf: true,
          type: 'axe',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3,
          anti: 4
        },
        {
          name: 'Axe of Virility(def)',
          description: `Effective against armored foes.`,
          prf: true,
          type: 'axe',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4,
          anti: 4
        },
        {
          name: 'Axe of Virility(res)',
          description: `Effective against armored foes.`,
          prf: true,
          type: 'axe',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4,
          anti: 4
        },
        {
          name: 'Armads',
          description: `Unit makes a guaranteed follow-up attack when attacked at HP ≥ 80%.`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Berserk Armads',
          description: `Accelerates Special cooldown (cooldown count-1). If unit\'s HP ≤ 75% and Special triggers by attacking, Special cooldown count-1 at start of turn. Deals +10 damage when Special triggers.`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Thunder Armads',
          description: `Grants Def+3. If number of allies within 2 spaces (excluding unit) > number of foes within 2 spaces (excluding target), foe cannot make a follow-up attack.`,
          prf: true,
          type: 'axe',
          mt: 16,
          def: 3
        },
        {
          name: 'Basilikos',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Basilikos(eff)',
          description: `Accelerates Special trigger (cooldown count-1).
          Grants Atk/Spd+5. Inflicts Def/Res-5.`,
          prf: true,
          type: 'axe',
          refine: 1,
          mt: 21,
          hp: 3,
          spd: 5,
          def: -5,
          res: -5
        },
        {
          name: 'Basilikos(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'axe',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Basilikos(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'axe',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Basilikos(def)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'axe',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Basilikos(res)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'axe',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Stout Tomahawk',
          description: `Enables counterattack regardless of distance when this unit is attacked.`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Garm',
          description: `Grants Atk+3. If a bonus granted by a skill like Rally or Hone and/or extra movement granted by a skill like Armor March or Armored Boots is active, unit makes a guaranteed follow-up attack.`,
          prf: true,
          type: 'axe',
          mt: 19
        },
        {
          name: 'Urvan',
          description: `Accelerates Speccial trigger (cooldown count-1). If unit receives consecutive attacks, reduces damage from foe\'s second attack by 80%.`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Draconic Poleax',
          description: `If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle advantage, reduces Atk by 20%.`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Draconic Poleax(eff)',
          description: `If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle advantage, reduces Atk by 20%.
          At start of turn, grants Res+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally\'s movement type on current team ≤ 2.`,
          prf: true,
          type: 'axe',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Draconic Poleax(atk)',
          description: `If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle advantage, reduces Atk by 20%.`,
          prf: true,
          type: 'axe',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Draconic Poleax(spd)',
          description: `If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle advantage, reduces Atk by 20%.`,
          prf: true,
          type: 'axe',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Draconic Poleax(def)',
          description: `If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle advantage, reduces Atk by 20%.`,
          prf: true,
          type: 'axe',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Draconic Poleax(res)',
          description: `If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle advantage, reduces Atk by 20%.`,
          prf: true,
          type: 'axe',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Wolf Berg',
          description: `Grants Def+3. If number of foes within 2 spaces (excluding target) ≥ number of allies within 2 spaces (excluding unit), grants Atk/Spd/Def/Res+4. during combat.`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Cherche\'s Axe',
          description: `Spd-5. Attack twice when initiating combat.`,
          prf: true,
          type: 'axe',
          mt: 11,
          spd: -5
        },
        {
          name: 'Cherche\'s Axe(eff)',
          description: `Spd-5. Attack twice when initiating combat.
          At start of turn, bonuses become penalties on all foes in cardinal directions with HP 1 or more lower than unit through foe\'s next action.`,
          prf: true,
          type: 'axe',
          refine: 1,
          mt: 11,
          hp: 3,
          spd: -5
        },
        {
          name: 'Cherche\'s Axe(atk)',
          description: `Spd-5. Attack twice when initiating combat.`,
          prf: true,
          type: 'axe',
          refine: 2,
          mt: 12,
          hp: 5,
          spd: -5
        },
        {
          name: 'Cherche\'s Axe(spd)',
          description: `Spd-5. Attack twice when initiating combat.`,
          prf: true,
          type: 'axe',
          refine: 3,
          mt: 11,
          hp: 5,
          spd: -2
        },
        {
          name: 'Cherche\'s Axe(def)',
          description: `Spd-5. Attack twice when initiating combat.`,
          prf: true,
          type: 'axe',
          refine: 4,
          mt: 11,
          hp: 5,
          def: 4,
          spd: -5
        },
        {
          name: 'Cherche\'s Axe(res)',
          description: `Spd-5. Attack twice when initiating combat.`,
          prf: true,
          type: 'axe',
          refine: 5,
          mt: 11,
          hp: 5,
          res: 4,
          spd: -5
        },
        {
          name: 'Urdr',
          description: `If Sing or Dance is used, grants Atk/Spd/Def/Res+3 to target.`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Camilla\'s Axe',
          description: `If unit is within 2 spaces of a cavalry or flying ally, grants Atk/Spd+4 during combat.`,
          prf: true,
          type: 'axe',
          mt: 16
        },
        {
          name: 'Camilla\'s Axe(eff)',
          description: `If unit is within 2 spaces of a cavalry or flying ally, grants Atk/Spd+4 during combat.
          Grants Atk/Spd+3 to cavalry and flying allies within 2 spaces during combat.`,
          prf: true,
          type: 'axe',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Camilla\'s Axe(atk)',
          description: `If unit is within 2 spaces of a cavalry or flying ally, grants Atk/Spd+4 during combat.`,
          prf: true,
          type: 'axe',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Camilla\'s Axe(spd)',
          description: `If unit is within 2 spaces of a cavalry or flying ally, grants Atk/Spd+4 during combat.`,
          prf: true,
          type: 'axe',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Camilla\'s Axe(def)',
          description: `If unit is within 2 spaces of a cavalry or flying ally, grants Atk/Spd+4 during combat.`,
          prf: true,
          type: 'axe',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Camilla\'s Axe(res)',
          description: `If unit is within 2 spaces of a cavalry or flying ally, grants Atk/Spd+4 during combat.`,
          prf: true,
          type: 'axe',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Sinmara',
          description: `Grants Def+3. At start of turn, deals 20 damage to foes within 2 spaces.`,
          prf: true,
          type: 'axe',
          mt: 16,
          def: 3
        },
        // ============== TOME(G) ============== //
        {
          name: 'Wind',
          description: ``,
          type: 'green tome',
          mt: 4
        },
        {
          name: 'Elwind',
          description: ``,
          type: 'green tome',
          mt: 6
        },
        {
          name: 'Rexcalibur',
          description: ``,
          type: 'green tome',
          mt: 9
        },
        {
          name: 'Rexcalibur+',
          description: ``,
          type: 'green tome',
          mt: 13
        },
        {
          name: 'Rexcalibur+(atk)',
          description: ``,
          type: 'green tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Rexcalibur+(spd)',
          description: ``,
          type: 'green tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Rexcalibur+(def)',
          description: ``,
          type: 'green tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Rexcalibur+(res)',
          description: ``,
          type: 'green tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Dancer\'s Ring',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'green tome',
          mt: 8
        },
        {
          name: 'Dancer\'s Ring+',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'green tome',
          mt: 12
        },
        {
          name: 'Dancer\'s Ring+(atk)',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'green tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Dancer\'s Ring+(spd)',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'green tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Dancer\'s Ring+(def)',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'green tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Dancer\'s Ring+(res)',
          description: `If unit initiates attack, adjacent allies recover 7 HP after combat.`,
          type: 'green tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Green Egg',
          description: `If unit initiates combat, restores 4 HP after combat.`,
          type: 'green tome',
          mt: 7
        },
        {
          name: 'Green Egg+',
          description: `If unit initiates combat, restores 4 HP after combat.`,
          type: 'green tome',
          mt: 11
        },
        {
          name: 'Green Egg+(atk)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'green tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Green Egg+(spd)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'green tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Green Egg+(def)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'green tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Green Egg+(res)',
          description: `After combat, if unit attacked, restores 4 HP.`,
          type: 'green tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Green Gift',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'green tome',
          mt: 8
        },
        {
          name: 'Green Gift+',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'green tome',
          mt: 12
        },
        {
          name: 'Green Gift+(atk)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'green tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Green Gift+(spd)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'green tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Green Gift+(def)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'green tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Green Gift+(res)',
          description: `If foe uses bow, dagger, magic, or staff, neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'green tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Gronnblade',
          description: `Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.`,
          type: 'green tome',
          mt: 9
        },
        {
          name: 'Gronnblade+',
          description: `Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.`,
          type: 'green tome',
          mt: 13
        },
        {
          name: 'Gronnowl',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'green tome',
          mt: 6
        },
        {
          name: 'Gronnowl+',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'green tome',
          mt: 10
        },
        {
          name: 'Gronnowl+(atk)',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'green tome',
          refine: 2,
          mt: 11,
          hp: 2
        },
        {
          name: 'Gronnowl+(spd)',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'green tome',
          refine: 3,
          mt: 10,
          hp: 2,
          spd: 2
        },
        {
          name: 'Gronnowl+(def)',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'green tome',
          refine: 4,
          mt: 10,
          hp: 2,
          def: 3
        },
        {
          name: 'Gronnowl+(res)',
          description: `During combat, boosts unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          type: 'green tome',
          refine: 5,
          mt: 10,
          hp: 2,
          res: 3
        },
        {
          name: 'Gronnraven',
          description: `Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.`,
          type: 'green tome',
          mt: 7
        },
        {
          name: 'Gronnraven+',
          description: `Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.`,
          type: 'green tome',
          mt: 11
        },
        {
          name: 'Gronnwolf',
          description: `Effective against cavalry foes.`,
          type: 'green tome',
          mt: 6,
          anti: 2
        },
        {
          name: 'Gronnwolf+',
          description: `Effective against cavalry foes.`,
          type: 'green tome',
          mt: 10,
          anti: 2
        },
        {
          name: 'Keen Gronnwolf',
          description: `Effective against cavalry foes.`,
          type: 'green tome',
          mt: 8,
          anti: 2
        },
        {
          name: 'Keen Gronnwolf+',
          description: `Effective against cavalry foes.`,
          type: 'green tome',
          mt: 12,
          anti: 2
        },
        {
          name: 'Keen Gronnwolf+(eff)',
          description: `Effective against cavalry foes.
          If in combat against cavalry foe, nullifies foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          type: 'green tome',
          refine: 1,
          mt: 12,
          anti: 2
        },
        {
          name: 'Keen Gronnwolf+(atk)',
          description: `Effective against cavalry foes.`,
          type: 'green tome',
          refine: 2,
          mt: 13,
          hp: 2,
          anti: 2
        },
        {
          name: 'Keen Gronnwolf+(spd)',
          description: `Effective against cavalry foes.`,
          type: 'green tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2,
          anti: 2
        },
        {
          name: 'Keen Gronnwolf+(def)',
          description: `Effective against cavalry foes.`,
          type: 'green tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3,
          anti: 2
        },
        {
          name: 'Keen Gronnwolf+(res)',
          description: `Effective against cavalry foes.`,
          type: 'green tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3,
          anti: 2
        },
        {
          name: 'Hibiscus Tome',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'green tome',
          mt: 8
        },
        {
          name: 'Hibiscus Tome+',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'green tome',
          mt: 12
        },
        {
          name: 'Hibiscus Tome+(atk)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'green tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Hibiscus Tome+(spd)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'green tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Hibiscus Tome+(def)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'green tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Hibiscus Tome+(res)',
          description: `Grants Atk/Spd+1 to allies within 2 spaces during combat.`,
          type: 'green tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        {
          name: 'Spectral Tome',
          description: `After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.`,
          type: 'green tome',
          mt: 8
        },
        {
          name: 'Spectral Tome+',
          description: `After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.`,
          type: 'green tome',
          mt: 12
        },
        {
          name: 'Spectral Tome+(atk)',
          description: `After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.`,
          type: 'green tome',
          refine: 2,
          mt: 13,
          hp: 2
        },
        {
          name: 'Spectral Tome+(spd)',
          description: `After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.`,
          type: 'green tome',
          refine: 3,
          mt: 12,
          hp: 2,
          spd: 2
        },
        {
          name: 'Spectral Tome+(def)',
          description: `After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.`,
          type: 'green tome',
          refine: 4,
          mt: 12,
          hp: 2,
          def: 3
        },
        {
          name: 'Spectral Tome+(res)',
          description: `After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.`,
          type: 'green tome',
          refine: 5,
          mt: 12,
          hp: 2,
          res: 3
        },
        // ============ PRF TOME(G)============= //
        {
          name: 'Muninn\'s Egg',
          description: `Grants Res+3. At start of turn, if unit\'s ≥ 50%, inflicts Atk/Spd-5 on foe on the enemy team with the lowest Spd through its next action.`,
          prf: true,
          type: 'green tome',
          mt: 14,
          res: 3
        },
        {
          name: 'Blizzard',
          description: `Grants Res+3. Grants bonus to unit\'s Atk = total penalties on foe during combat.`,
          prf: true,
          type: 'green tome',
          mt: 14,
          res: 3
        },
        {
          name: 'Elivagar',
          description: `If unit initiates combat, converts bonuses on foes within 2 spaces of target into penalties through their next actions.`,
          prf: true,
          type: 'green tome',
          mt: 14
        },
        {
          name: 'Excalibur',
          description: `Effective against flying foes.`,
          prf: true,
          type: 'green tome',
          mt: 14,
          anti: 3
        },
        {
          name: 'Excalibur(eff)',
          description: `Effective against flying foes. Accelerates Special trigger (cooldown count-1).
          If unit is within 2 spaces of magic or staff ally, grants Atk/Spd+5.`,
          prf: true,
          type: 'green tome',
          refine: 1,
          mt: 14,
          anti: 3
        },
        {
          name: 'Excalibur(atk)',
          description: `Effective against flying foes. Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'green tome',
          refine: 2,
          mt: 15,
          hp: 2,
          anti: 3
        },
        {
          name: 'Excalibur(spd)',
          description: `Effective against flying foes. Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'green tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2,
          anti: 3
        },
        {
          name: 'Excalibur(def)',
          description: `Effective against flying foes. Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'green tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3,
          anti: 3
        },
        {
          name: 'Excalibur(res)',
          description: `Effective against flying foes. Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'green tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3,
          anti: 3
        },
        {
          name: 'Dark Excalibur',
          description: `Deals +10 damage when Special triggers.`,
          prf: true,
          type: 'green tome',
          mt: 14
        },
        {
          name: 'Forseti',
          description: `Grants Spd+3. If unit\'s HP ≥ 50%, and unit inititates combat, unit can make a follow-up attack before foe can counterattack.`,
          prf: true,
          type: 'green tome',
          mt: 14,
          spd: 3
        },
        {
          name: 'Divine Naga',
          description: `Effective against dragon foes. Neutralizes foe\'s bonuses (from skills like Fortify, Rally, etc.) during combat.`,
          prf: true,
          type: 'green tome',
          mt: 14,
          anti: 5
        },
        {
          name: 'Naga',
          description: `Effective against dragon foes. If foe initiates combat, grants Def/Res+2 during combat.`,
          prf: true,
          type: 'green tome',
          mt: 14,
          anti: 5
        },
        {
          name: 'Thunderhead',
          description: `Adds total bonuses on unit to damage dealt.`,
          prf: true,
          type: 'green tome',
          mt: 14
        },
        {
          name: 'Giga Excalibur',
          description: `Grants Spd+3. If unit\'s Spd > foe\'s Spd, deals damage = 70% of difference between stats. (Maximum bonus of +7 damage. Combos with Phantom Spd.)`,
          prf: true,
          type: 'green tome',
          mt: 14
        },
        {
          name: 'Wind\'s Brand',
          description: `At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.`,
          prf: true,
          type: 'green tome',
          mt: 14
        },
        {
          name: 'Wind\'s Brand(eff)',
          description: `At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.
          During combat, boost unit\'s Atk/Spd/Def/Res by number of adjacent allies x 2.`,
          prf: true,
          type: 'green tome',
          refine: 1,
          mt: 14
        },
        {
          name: 'Wind\'s Brand(atk)',
          description: `At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.`,
          prf: true,
          type: 'green tome',
          refine: 2,
          mt: 15,
          hp: 2
        },
        {
          name: 'Wind\'s Brand(spd)',
          description: `At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.`,
          prf: true,
          type: 'green tome',
          refine: 3,
          mt: 14,
          hp: 2,
          spd: 2
        },
        {
          name: 'Wind\'s Brand(def)',
          description: `At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.`,
          prf: true,
          type: 'green tome',
          refine: 4,
          mt: 14,
          hp: 2,
          def: 3
        },
        {
          name: 'Wind\'s Brand(res)',
          description: `At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.`,
          prf: true,
          type: 'green tome',
          refine: 5,
          mt: 14,
          hp: 2,
          res: 3
        },
        {
          name: 'Nifl Frostflowers',
          description: `Grants Atk+3. During combat, boosts unit\'s Atk/Spd by number of allies within 2 spaces x 2. (Maximum bonus of +6 to each stat.`,
          prf: true,
          type: 'green tome',
          mt: 17
        },
        {
          name: 'Book of Shadows',
          description: `Grants Spd+3. If unit is adjacent to ally, inflicts Atk/Spd/Def/Res-4 on foe during combat.`,
          prf: true,
          type: 'green tome',
          mt: 14,
          spd: 3
        },
        // ============== BREATH =============== //
        {
          name: 'Fire Breath',
          description: ``,
          type: 'breath',
          mt: 6
        },
        {
          name: 'Fire Breath+',
          description: ``,
          type: 'breath',
          mt: 8
        },
        {
          name: 'Flametongue',
          description: ``,
          type: 'breath',
          mt: 11
        },
        {
          name: 'Flametongue+',
          description: ``,
          type: 'breath',
          mt: 15
        },
        {
          name: 'Flametongue+(atk)',
          description: `If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 2,
          mt: 18,
          hp: 5
        },
        {
          name: 'Flametongue+(spd)',
          description: `If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Flametongue+(def)',
          description: `If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Flametongue+(res)',
          description: `If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Dark Breath',
          description: `After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next action.`,
          type: 'breath',
          mt: 9
        },
        {
          name: 'Dark Breath+',
          description: `After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next action.`,
          type: 'breath',
          mt: 13
        },
        {
          name: 'Dark Breath+(atk)',
          description: `After combat, inflicts Atk/Spd-7 to target and foes within 2 spaces of target through their next actions. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Dark Breath+(spd)',
          description: `After combat, inflicts Atk/Spd-7 to target and foes within 2 spaces of target through their next actions. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Dark Breath+(def)',
          description: `After combat, inflicts Atk/Spd-7 to target and foes within 2 spaces of target through their next actions. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Dark Breath+(res)',
          description: `After combat, inflicts Atk/Spd-7 to target and foes within 2 spaces of target through their next actions. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Lightning Breath',
          description: `Enables counterattack regardless of distance if this unit is attacked. Slows Special trigger (cooldown count+1).`,
          type: 'breath',
          mt: 7
        },
        {
          name: 'Lightning Breath+',
          description: `Enables counterattack regardless of distance if this unit is attacked. Slows Special trigger (cooldown count+1).`,
          type: 'breath',
          mt: 11
        },
        {
          name: 'Lightning Breath+(atk)',
          description: `Enables counterattack regardless of distance if this unit is attacked. Slows Special trigger (cooldown count+1). If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 2,
          mt: 14,
          hp: 5
        },
        {
          name: 'Lightning Breath+(spd)',
          description: `Enables counterattack regardless of distance if this unit is attacked. Slows Special trigger (cooldown count+1). If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 3,
          mt: 12,
          hp: 5,
          spd: 3
        },
        {
          name: 'Lightning Breath+(def)',
          description: `Enables counterattack regardless of distance if this unit is attacked. Slows Special trigger (cooldown count+1). If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 4,
          mt: 12,
          hp: 5,
          def: 4
        },
        {
          name: 'Lightning Breath+(res)',
          description: `Enables counterattack regardless of distance if this unit is attacked. Slows Special trigger (cooldown count+1). If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 5,
          mt: 12,
          hp: 5,
          res: 4
        },
        {
          name: 'Light Breath',
          description: `Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates.`,
          type: 'breath',
          mt: 9
        },
        {
          name: 'Light Breath+',
          description: `Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates.`,
          type: 'breath',
          mt: 13
        },
        {
          name: 'Light Breath+(atk)',
          description: `After combat, if unit attacked, grants Atk/Spd/Def/Res+5 to unit and allies within 2 spaces of unit for 1 turn. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Light Breath+(spd)',
          description: `After combat, if unit attacked, grants Atk/Spd/Def/Res+5 to unit and allies within 2 spaces of unit for 1 turn. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Light Breath+(def)',
          description: `After combat, if unit attacked, grants Atk/Spd/Def/Res+5 to unit and allies within 2 spaces of unit for 1 turn. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Light Breath+(res)',
          description: `After combat, if unit attacked, grants Atk/Spd/Def/Res+5 to unit and allies within 2 spaces of unit for 1 turn. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        {
          name: 'Water Breath',
          description: `Grants Def/Res+4 during combat if foe intitates combat. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          mt: 10
        },
        {
          name: 'Water Breath+',
          description: `Grants Def/Res+4 during combat if foe intitates combat. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          mt: 14
        },
        {
          name: 'Water Breath+(atk)',
          description: `Grants Def/Res+4 during combat if foe intitates combat. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 2,
          mt: 16,
          hp: 5
        },
        {
          name: 'Water Breath+(spd)',
          description: `Grants Def/Res+4 during combat if foe intitates combat. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 3,
          mt: 14,
          hp: 5,
          spd: 3
        },
        {
          name: 'Water Breath+(def)',
          description: `Grants Def/Res+4 during combat if foe intitates combat. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 4,
          mt: 14,
          hp: 5,
          def: 4
        },
        {
          name: 'Water Breath+(res)',
          description: `Grants Def/Res+4 during combat if foe intitates combat. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          type: 'breath',
          refine: 5,
          mt: 14,
          hp: 5,
          res: 4
        },
        // ============ PRF BREATH ============= //
        {
          name: 'Breath of Fog',
          description: `Effective against dragon foes. At the start of every second turn, unit recovers 10 HP. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          mt: 16,
          anti: 5
        },
        {
          name: 'Breath of Fog(eff)',
          description: `Effective against dragon foes. At the start of every second turn, unit recovers 10 HP. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.
          If unit is within 2 spaces of sword or dragon ally, grants Atk/Def+5 during combat.`,
          prf: true,
          type: 'breath',
          refine: 1,
          mt: 16,
          hp: 3,
          anti: 5
        },
        {
          name: 'Breath of Fog(atk)',
          description: `Effective against dragon foes. At the start of every second turn, unit recovers 10 HP. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          refine: 2,
          mt: 18,
          hp: 5,
          anti: 5
        },
        {
          name: 'Breath of Fog(spd)',
          description: `Effective against dragon foes. At the start of every second turn, unit recovers 10 HP. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3,
          anti: 5
        },
        {
          name: 'Breath of Fog(def)',
          description: `Effective against dragon foes. At the start of every second turn, unit recovers 10 HP. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4,
          anti: 5
        },
        {
          name: 'Breath of Fog(res)',
          description: `Effective against dragon foes. At the start of every second turn, unit recovers 10 HP. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4,
          anti: 5
        },
        {
          name: 'Summer\'s Breath',
          description: `Effective against dragon foes. Grants Def+3. If foe initiates combat, grants Special count +1 per attack during combat. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          mt: 16,
          def: 3,
          anti: 5
        },
        {
          name: 'Divine Mist',
          description: `Effective against dragon foes. Enables counterattack regardless of distance if this unit is attacked. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          mt: 16,
          anti: 5
        },
        {
          name: 'Great Flame',
          description: `Grants Atk+3. If unit\'s Def ≥ foe\'s Def+5, foe cannot make a follow-up attack. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          mt: 19
        },
        {
          name: 'Spirit Breath',
          description: `Grants Def+3. If unit initiates combat and unit\'s Def ≥ foe\'s Def+5, unit makes a guaranteed follow-up attack. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          mt: 16,
          def: 3
        },
        {
          name: 'Expiration',
          description: `Enables counterattack regardless of distance if this unit is attacked. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          mt: 16
        },
        {
          name: 'Draconic Rage',
          description: `Accelerates Special trigger (cooldown count-1). If the number of allies within 2 spaces (excluding unit) > number of foes within 2 spaces (excluding target), grants Atk/Spd+5 during combat. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          mt: 16
        },
        {
          name: 'Breath of Blight',
          description: `Negates \"effective against dragon foes\" bonuses. At the start of turn 4, deals 10 damage to foes within 3 spaces and restores HP to unit = to number of foes within 3 spaces x 5. If foe\'s Range = 2, damage calculated using the lower of foe\'s Def or Res.`,
          prf: true,
          type: 'breath',
          mt: 16
        },
        // ================ BOW ================ //
        {
          name: '',
          description: `Effective against flying foes.`,
          prf: true,
          type: 'bow',
          mt: 0,
          anti: 3
        },
        // ============== PRF BOW ============== //
        // ============== DAGGER =============== //
        // ============ PRF DAGGER ============= //
        // =============== STAFF =============== //
        // ============= PRF STAFF ============= //
      ]);
    });
};

/*
{
  name: '',
  description: `Effective against flying foes.`,
  prf: true,
  type: 'bow',
  mt: 0,
  anti: 3
},
*/