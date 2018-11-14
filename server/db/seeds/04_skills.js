/*
ID LEGEND
---------

FIRST digit decides category
Weapons begin with 1
Assists begin with 2
Specials begin with 3
Slot skills begin with 4, 5, or 6

All skills are sorted based on how they appear in
the Search Skill function when inheriting skills
within the game.

Weapons in particular are sorted as follows:

SWORD
R TOME
LANCE
B TOME
AXE
G TOME
DRAGONSTONE
BOW
DAGGER
STAFF

============================================================

SECOND digit determines "PRF" status
Normal skils have a 0.
PRFs have a 1 after the category number, and go at the 
bottom of the respective category list. Example:

100000 : Iron Sword
100001 : Steel Sword
100002 : Silver Sword
100003 : Silver Sword+
110000 : Falchion (Archanea)
110001 : Excalibur
110002 : Dark Excalibur

200000 : Rally Defense
200001 : Rally Defense+
210000 : Future Vision

300000 : New Moon
300001 : Moonbow
300002 : Luna
300003 : Aether
310000 : Radiant Aether

And so forth.

All PRFs are ordered by which the default wielder appears
in the catalog. For example, "Divine Tyrfing" would come
before "Tyrfing" despite Tyrfing being implemented first
as Sigurd comes before Seliph, and Sigurd wields the 
upgraded version instead of the normal Tyrfing that Seliph
naturally comes with. 

As it still follows the other categorizing methods, Gradivus
would come before Aura and Excalibur despite Hardin
appearing after Linde and Merric, as the Gradivus is a LANCE
and would be prioritized over Aura and Excalibur, which are
B TOME and G TOME, respectively.

============================================================

ALL REMAINING NUMBERS are yet to be used, except as a counter
*/


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        // =============== SWORD =============== //
        {
          id: 100000,
          name: 'SWORD',
          description: 'description',
          type: 'sword'
        },
        {
          id: 100001,
          name: 'Iron Sword',
          description: ``,
          type: 'sword',
          mt: 6
        },
        {
          id: 100002,
          name: 'Steel Sword',
          description: ``,
          type: 'sword',
          mt: 8
        },
        {
          id: 100003,
          name: 'Silver Sword',
          description: ``,
          type: 'sword',
          mt: 11
        },
        {
          id: 100004,
          name: 'Silver Sword+',
          description: ``,
          type: 'sword',
          mt: 15,
        },
        {
          id: 100005,
          name: 'Silver Sword+(atk)',
          description: ``,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2
        },
        {
          id: 100006,
          name: 'Silver Sword+(spd)',
          description: ``,
          type: 'sword',
          mt: 16,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          id: 100007,
          name: 'Silver Sword+(def)',
          description: ``,
          type: 'sword',
          mt: 16,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          id: 100008,
          name: 'Silver Sword+(res)',
          description: ``,
          type: 'sword',
          mt: 16,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          id: 100009,
          name: 'Brave Sword',
          description: `Inflicts Spd-5. If unit initiates combat, unit attacks twice.`,
          type: 'sword',
          mt: 5
        },
        {
          id: 100010,
          name: 'Brave Sword+',
          description: `Inflicts Spd-5. If unit initiates combat, unit attacks twice.`,
          type: 'sword',
          mt: 8
        },
        {
          id: 100011,
          name: 'Killing Edge',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 7
        },
        {
          id: 100012,
          name: 'Killing Edge+',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 11
        },
        {
          id: 100013,
          name: 'Slaying Edge',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 10
        },
        {
          id: 100014,
          name: 'Slaying Edge+',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 14
        },
        {
          id: 100015,
          name: 'Slaying Edge+(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2
        },
        {
          id: 100016,
          name: 'Slaying Edge+(spd)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          type: 'sword',
          mt: 14,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          id: 100017,
          name: 'Slaying Edge+(def)',
          description: `Accelerates Special trigger (cooldown count-1)`,
          type: 'sword',
          mt: 14,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          id: 100018,
          name: 'Slaying Edge+(res)',
          description: `Accelerates Special trigger (cooldown count-1)`,
          type: 'sword',
          mt: 14,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          id: 100019,
          name: 'Wo Dao',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 9
        },
        {
          id: 100020,
          name: 'Wo Dao+',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 13
        },
        {
          id: 100021,
          name: 'Wo Dao+(atk)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2
        },
        {
          id: 100022,
          name: 'Wo Dao+(spd)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          id: 100023,
          name: 'Wo Dao+(def)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          id: 100024,
          name: 'Wo Dao+(res)',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          id: 100025,
          name: 'Armorslayer',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 8,
          anti: 4
        },
        {
          id: 100026,
          name: 'Armorslayer+',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 12,
          anti: 4
        },
        {
          id: 100027,
          name: 'Armorsmasher',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 10,
          anti: 4
        },
        {
          id: 100028,
          name: 'Armorsmasher+',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 14,
          anti: 4
        },
        {
          id: 100029,
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
          id: 100030,
          name: 'Armorsmasher+(atk)',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2,
          anti: 4
        },
        {
          id: 100031,
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
          id: 100032,
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
          id: 100033,
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
          id: 100034,
          name: 'Zanbato',
          description: `Effective against cavalry foes.`,
          type: 'sword',
          mt: 10,
          anti: 2
        },
        {
          id: 100035,
          name: 'Zanbato+',
          description: `Effective against cavalry foes.`,
          type: 'sword',
          mt: 14,
          anti: 2
        },
        {
          id: 100036,
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
          id: 100037,
          name: 'Zanbato+(atk)',
          description: `Effective against cavalry foes.`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2,
          anti: 2
        },
        {
          id: 100038,
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
          id: 100039,
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
          id: 100040,
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
          id: 100041,
          name: 'Ruby Sword',
          description: `If unit has weapon-triangle advantage, boosts attack by 20%. If unit has weapon-triangle disadvantage, reduces attack by 20%.`,
          type: 'sword',
          mt: 8
        },
        {
          id: 100042,
          name: 'Ruby Sword+',
          description: `If unit has weapon-triangle advantage, boosts attack by 20%. If unit has weapon-triangle disadvantage, reduces attack by 20%.`,
          type: 'sword',
          mt: 14
        },
        {
          id: 100043,
          name: 'Firesweep S',
          description: `Unit and foe cannot counterattack.`,
          type: 'sword',
          mt: 11
        },
        {
          id: 100044,
          name: 'Firesweep S+',
          description: `Unit and foe cannot counterattack.`,
          type: 'sword',
          mt: 15
        },
        {
          id: 100045,
          name: 'Safeguard',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 10
        },
        {
          id: 100046,
          name: 'Safeguard+',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 14
        },
        {
          id: 100047,
          name: 'Safeguard+(atk)',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2
        },
        {
          id: 100048,
          name: 'Safeguard+(spd)',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          id: 100049,
          name: 'Safeguard+(def)',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          id: 100050,
          name: 'Safeguard+(res)',
          description: `If foe initiates combat, grants Def+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          res: 4,
          refine: 5
        },
        {
          id: 100051,
          name: 'Barrier Blade',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 10
        },
        {
          id: 100052,
          name: 'Barrier Blade+',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 14
        },
        {
          id: 100053,
          name: 'Barrier Blade+(atk)',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 16,
          hp: 5,
          refine: 2
        },
        {
          id: 100054,
          name: 'Barrier Blade+(spd)',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          spd: 3,
          refine: 3
        },
        {
          id: 100055,
          name: 'Barrier Blade+(def)',
          description: `If foe initiates combat, grants Res+7 during combat.`,
          type: 'sword',
          mt: 14,
          hp: 5,
          def: 4,
          refine: 4
        },
        {
          id: 100056,
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
          id: 110000,
          name: 'PRF SWORD',
          description: `description`,
          prf: true,
          type: 'sword',
          mt: 0
        },
        {
          id: 110001,
          name: 'Folkvangr',
          description: `At start of turn, if unit\'s HP ≤ 50%, grants Atk+5 for 1 turn.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          id: 110002,
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
          id: 110003,
          name: 'Folkvangr(atk)',
          description: `At start of combat, if unit\'s HP ≤ 80%, grants Atk/Def+7 during combat.`,
          prf: true,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2
        },
        {
          id: 110004,
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
          id: 110005,
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
          id: 110006,
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
          id: 110007,
          name: 'Niu',
          description: `Grants Spd+3. Adds 50% of total bonuses on foe to unit's Atk/Spd/Def/Res during combat.`,
          prf: true,
          type: 'sword',
          mt: 16,
          spd: 3
        },
        {
          id: 110008,
          name: 'Laevatein',
          description: `Grants Atk+3. Adds total bonuses on unit to damage dealt.`,
          prf: true,
          type: 'sword',
          mt: 16,
          atk: 3
        },
        {
          id: 110009,
          name: 'Falchion(Archanea)',
          description: `Effective against dragon foes. At the start of every third turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          anti: 5
        },
        {
          id: 110010,
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
          id: 110011,
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
          id: 110012,
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
          id: 110013,
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
          id: 110014,
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
          id: 110015,
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
          id: 110016,
          name: 'Wing Sword',
          description: `Effective against armored and cavalry foes.`,
          prf: true,
          type: 'sword',
          mt: 16,
          anti: 7
        },
        {
          id: 110017,
          name: 'Wing Sword(eff)',
          description: `Effective against armored and cavalry foes.
          If unit\'s Spd - foe's Spd ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.`,
          prf: true,
          type: 'sword',
          mt: 16,
          hp: 3,
          refine: 1,
          anti: 7
        },
        {
          id: 110018,
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
          id: 110019,
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
          id: 110020,
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
          id: 110021,
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
          id: 110022,
          name: 'Falchion(Valentia)',
          description: `Effective against dragon foes. At the start of every third turn, restores 10 HP.`,
          prf: true,
          type: 'sword',
          mt: 16,
          anti: 5
        },
        {
          id: 110023,
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
          id: 110024,
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
          id: 110025,
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
          id: 110026,
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
          id: 110027,
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
          id: 110028,
          name: 'Beloved Zofia',
          description: `Grants Def+3. If unit\'s HP = 100% at the start of combat, grants Atk/Spd/Def/Res+4, but if unit attacked, unit takes 4 damage after combat.`,
          prf: true,
          type: 'sword',
          mt: 16,
          def: 3
        },
        {
          id: 110029,
          name: 'Royal Sword',
          description: `Grants Spd+3. If unit is within 2 spaces of an ally, grants unit Special cooldown charge +1 per unit\'s attack. (Only highest value applied. Does not stack.)`,
          prf: true,
          type: 'sword',
          mt: 16,
          spd: 3
        },
        {
          id: 110030,
          name: 'Golden Dagger',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          id: 110031,
          name: 'Golden Dagger(eff)',
          description: `Accelerates Special trigger (cooldown count-1).
          At start of combat, if Special is ready, grants Atk/Spd/Def/Res+3 during combat and unit can counterattack regardless of foe\'s range.`,
          prf: true,
          type: 'sword',
          mt: 16,
          refine: 1
        },
        {
          id: 110032,
          name: 'Golden Dagger(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2
        },
        {
          id: 110033,
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
          id: 110034,
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
          id: 110035,
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
          id: 110036,
          name: 'Divine Tyrfing',
          description: `Grants Res+3. If in combat against foe using magic, unit receives 50% less damage from the first attack.`,
          prf: true,
          type: 'sword',
          mt: 16,
          res: 3
        },
        {
          id: 110037,
          name: 'Ayra\s Blade',
          description: `Grants Spd+3. If unit\'s Spd - foe\'s Spd ≥ 1, gain Special cooldown charge +1 per attack. (If similar skill used, only highest value applied.)`,
          prf: true,
          type: 'sword',
          mt: 16,
          spd: 3
        },
        {
          id: 110038,
          name: 'Mystletainn',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          id: 110039,
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
          id: 110040,
          name: 'Mystletainn(atk)',
          description: `Accelerates Special trigger (cooldown count-1).`,
          prf: true,
          type: 'sword',
          mt: 18,
          hp: 5,
          refine: 2
        },
        {
          id: 110041,
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
          id: 110042,
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
          id: 110043,
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
          id: 110044,
          name: 'Tyrfing',
          description: `Grants Def+4 in battle if unit\'s HP ≤ 50%.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          id: 110045,
          name: 'Dark Mystletainn',
          description: `Accelerates Special trigger (cooldown count-1). If Special triggers before or during combat, grants Special cooldown count-2 after combat.`,
          prf: true,
          type: 'sword',
          mt: 16
        },
        {
          id: 110046,
          name: '',
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
  id: 110000,
  name: '',
  description: ``,
  prf: true,
  type: 'sword',
  mt: 0
},
*/