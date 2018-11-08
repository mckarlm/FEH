/*
ID LEGEND
---------

FIRST digit decides category
Weapons begin with 1
Assists begin with 2
Specials begin with 3
Slot skills begin with 4, 5, or 6

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


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {
          id: 100000,
          name: 'name',
          description: 'description',
          type: 'none',
          mt: 0
        },
        {
          id: 100001,
          name: 'Iron Sword',
          description: '',
          type: 'sword',
          mt: 6
        },
        {
          id: 100002,
          name: 'Steel Sword',
          description: '',
          type: 'sword',
          mt: 8
        },
        {
          id: 100003,
          name: 'Silver Sword',
          description: '',
          type: 'sword',
          mt: 11
        },
        {
          id: 100004,
          name: 'Silver Sword+',
          description: '',
          type: 'sword',
          mt: 15,
        },
        {
          id: 100005,
          name: 'Brave Sword',
          description: `Inflicts Spd-5. If unit initiates
          combat, unit attacks twice.`,
          type: 'sword',
          mt: 5
        },
        {
          id: 100006,
          name: 'Brave Sword+',
          description: `Inflicts Spd-5. If unit initiates
          combat, unit attacks twice.`,
          type: 'sword',
          mt: 8
        },
        {
          id: 100007,
          name: 'Killing Edge',
          description: `Accelerates Special trigger
          (cooldown count-1).`,
          type: 'sword',
          mt: 7
        },
        {
          id: 100008,
          name: 'Killing Edge+',
          description: `Accelerates Special trigger
          (cooldown count-1).`,
          type: 'sword',
          mt: 11
        },
        {
          id: 100009,
          name: 'Slaying Edge',
          description: `Accelerates Special trigger
          (cooldown count-1).`,
          type: 'sword',
          mt: 10
        },
        {
          id: 100010,
          name: 'Slaying Edge+',
          description: `Accelerates Special trigger
          (cooldown count-1).`,
          type: 'sword',
          mt: 14
        },
        {
          id: 100011,
          name: 'Wo Dao',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 9
        },
        {
          id: 100012,
          name: 'Wo Dao+',
          description: `Deals +10 damage when Special triggers.`,
          type: 'sword',
          mt: 13
        },
        {
          id: 100013,
          name: 'Armorslayer',
          description: `Effective against armored foes.`,
          type: 'sword',
          mt: 8
          // MAKE A NEW TABLE FOR ANTI-TYPE EFFECTS
          // MAKE A NEW TABLE FOR REFINE EFFECTS
        },
      ]);
    });
};
