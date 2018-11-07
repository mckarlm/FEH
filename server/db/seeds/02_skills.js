/*
ID LEGEND
---------
FIRST digit decides category
Weapons begin with 1
Assists begin with 2
Specials begin with 3
Slot skills begin with 4, 5, or 6

SECOND digit determines "prf" status
Normal skils have a 0.
Prfs have a 1 after the category number, and go at the 
bottom of the respective category list. Example:

100000 : Silver Sword
100001 : Silver Sword+
100002 : Armorslayer
100003 : Armorslayer+
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
          prf: false,
          level: 0,
          type: '',
          mt: 16
        },
        {
          id: 100000,
          name: '',
          description: '',
          prf: false,
          level: 0,
          type: '',
          mt: 0
        },
        {
          id: 100000,
          name: '',
          description: '',
          prf: false,
          level: 0,
          type: '',
          mt: 0
        }
      ]);
    });
};
