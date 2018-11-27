
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        // =============== SWORD =============== //
        {
          name: 'SWORD',
          description: 'description',
          type: 'sword'
        },
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
          Neutralizes armored foes\' bonuses (from skills like Fortify, Rally, etc.) during combat.`,
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
          Neutralizes cavalry foes\' bonuses (from skills like Fortify, Rally, etc.) during combat.`,
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
        // =============== PRF SWORD =============== //
        {
          name: 'PRF SWORD',
          description: `description`,
          prf: true,
          type: 'sword',
          mt: 0
        },
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
          Grants +10 to damage when Special triggers.`,
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
          description: `If foe's HP is 100% when combat starts, unit receives Atk/Spd+2, during combat.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          name: 'Regal Blade(eff)',
          description: `If foe's HP is 100% when combat starts, unit receives Atk/Spd+3, during combat.
          If unit is within 2 spaces of an infantry magic ally, grants Atk/Spd/Def/Res+3 during combat.`,
          prf: true,
          type: 'sword',
          refine: 1,
          mt: 16,
          hp: 3
        },
        {
          name: 'Regal Blade(atk)',
          description: `If foe's HP is 100% when combat starts, unit receives Atk/Spd+3, during combat.`,
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 18,
          hp: 3
        },
        {
          name: 'Regal Blade(spd)',
          description: `If foe's HP is 100% when combat starts, unit receives Atk/Spd+3, during combat.`,
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Regal Blade(def)',
          description: `If foe's HP is 100% when combat starts, unit receives Atk/Spd+3, during combat.`,
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Regal Blade(res)',
          description: `If foe's HP is 100% when combat starts, unit receives Atk/Spd+3, during combat.`,
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
          description: `At start of turn, grants adjacent allies Atk+4 for 1 turn.`
          prf: true,
          type: 'sword',
          refine: 2,
          mt: 18,
          hp: 3
        },
        {
          name: 'Sieglinde(spd)',
          description: `At start of turn, grants adjacent allies Atk+4 for 1 turn.`
          prf: true,
          type: 'sword',
          refine: 3,
          mt: 16,
          hp: 5,
          spd: 3
        },
        {
          name: 'Sieglinde(def)',
          description: `At start of turn, grants adjacent allies Atk+4 for 1 turn.`
          prf: true,
          type: 'sword',
          refine: 4,
          mt: 16,
          hp: 5,
          def: 4
        },
        {
          name: 'Sieglinde(res)',
          description: `At start of turn, grants adjacent allies Atk+4 for 1 turn.`
          prf: true,
          type: 'sword',
          refine: 5,
          mt: 16,
          hp: 5,
          res: 4
        },
        {
          name: 'Storm Sieglinde',
          description: `Grants Atk+3. If number of foes within 2 spaces (excluding target) ≥ number of allies within 2 spaces (excluding unit), grants Def/Res+3 and special cooldown charge +1 during unit's attack during combat. (Only highest value applied. Does not stack.)`,
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
          description: `Grants Atk+3. Grants +10 to damage when Special triggers.`,
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
          description: ``,
          prf: true,
          type: 'sword',
          mt: 0
        },
      ]);
    });
};

/*
≥≤
{
  name: '',
  description: ``,
  prf: true,
  type: 'sword',
  mt: 0
},
{
  name: 'Eckesachs(eff)',
  description: `Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions.`,
  prf: true,
  type: 'sword',
  refine: 0,
  mt: 16,
  hp: 5
},
  */