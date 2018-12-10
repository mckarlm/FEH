
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('antitypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('antitypes').insert([
        {
          id: 0,
          eff_vs: 'none'
        },
        {
          id: 1,
          eff_vs: 'infantry'
        },
        {
          id: 2,
          eff_vs: 'cavalry'
        },
        {
          id: 3,
          eff_vs: 'flier'
        },
        {
          id: 4,
          eff_vs: 'armor'
        },
        {
          id: 5,
          eff_vs: 'dragon'
        },
        {
          id: 6,
          eff_vs: 'tome'
        },
        {
          id: 7,
          eff_vs: 'cavalry, armor'
        },
      ]);
    });
};

/*
ASSISTS

Future Vision
Dance
Sing
*/

/*
SPECIALS

Ice Mirror
Fire Emblem
Regnal Astra
Radiant Aether
Black Luna
*/

/*
PASSIVES

Freezing Seal
Chilling Seal
Surtr's Menace
Binding Shield
With Everyone!
Double Lion
Crusader's Ward
Follow-Up Ring
Recover Ring
S Drink
Ostian Counter
Ostia's Pulse
Sacae's Blessing
Laws of Sacae
Lunar Brace
Solar Brace
Beorc's Blessing
Warp Powder
Dragonskin
Bushido
*/