
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

Dragonskin
Laws of Sacae
Ostian Counter

Beorc's Blessing
Binding Shield
Bushido
Chilling Seal
Crusader's Ward
Double Lion
Follow-Up Ring
Freezing Seal
Lunar Brace
Recover Ring
S Drink
Sacae's Blessing
Solar Brace
Warp Powder

Ostia's Pulse
Surtr's Menace
With Everyone!

==NEW SKILLS==
++WEPS
Sokkvabekkr sord
??? g tome
Lyfjaberg dagger

++
Mystic Boost
Sparkling Boost
*/