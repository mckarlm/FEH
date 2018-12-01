
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
≥≤

WEAPONS

Folkvangr
Fensalir
Muninn's Egg (g)
Noatun
Hlidskjalf
Leiptr
Blizzard (g)
Niu
Laevateinn
Byleistr
Thokk
Falchion(Archaenea)
Exalted Falchion
Wing Sword
Aura (b)
Parthia
Hauteclere
Huginn's Egg (b)
Excalibur (g)
Gradivus
Breath of Fog
Summer's Breath
Divine Mist
Reese's Tome (r)
Falchion(Valentia)
Sagittae (b)
Rhompaia
Ragnarok (r)
Beloved Zofia
Royal Sword
Golden Dagger
Dark Aura (b)
Dark Excalibur (g)
Divine Tyrfing
Valflame (r)
Gae Bolg
Ayra's Blade
Forseti (g)
Mystletainn
Divine Naga (g)
Tyrfing
Book of Naga (g)
Dark Mystletainn
Loptous (r)
Mjolnir (b)
Light Brand
Dire Thunder (b)
Meisterschwert
Thunderhead (g)
Wargod's Tome (b)
Binding Blade
Blazing Durandal
Forblaze (r)
Eckesachs
Shanna's Lance
Axe of Virility
Nameless Blade
Durandal
Sol Katti
Mulagir
Swift Mulagir
Armads
Berserk Armads
Thunder Armads
Maltet
Basilikos
Stout Tomahawk
Florina's Lance
Vassal's Blade
Regal Blade
Deathly Dagger
Giga Excalibur (g)
Sieglinde
Gleipnir (r)
Storm Sieglinde
Siegmund
Flame Siegmund
Garm
Weirding Tome (b)
Nidhogg
Vidofnir
Fruit of Idunn (r)
Naglfar (r)
Cursed Lance
Audhulma
Ivaldi (b)
Great Flame
Spirit Breath
Ragnell
Urvan
Draconic Poleax
Wind's Brand (g)
Resolute Blade
Amiti
Dauntless Lance
Nifl Frostflowers (b)
Alondite
Thani (b)
Dawn Suzu (r)
Peshkatz
Cymbeline (r)
Falchion(Awakening)
Sealed Falchion
Expiration
Solitary Blade
Skuld
Muspell Fireposy (r)
Aversa's Night (r)
Wolf Berg
Cherche's Axe
Grimoire (r)
Geirskogul
Thogn
Missiletainn(Dark)
Grima's Truth (r)
Yato
Draconic Rage
Urdr
Book of Shadows (g)
Felicia's Plate
Raijinto
Hinoka's Spear
Warrior Princess
Fujin Yumi
Skadi
Breath of Blight
Siegfried
Camilla's Axe
Book of Dreams (r)
Brynhildr (r)
Odin's Grimoire (b)
Hoarfrost Knife
Bright Naginata
Dark Greatsword
Missiletainn(Dusk) (b)

Gjoll
Sylgr
Sinmara
Imhullu (r)
*/

/*
ASSISTS

*/

/*
SPECIALS
*/

/*
PASSIVES
*/