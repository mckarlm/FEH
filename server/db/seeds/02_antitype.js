
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
Folkvangr
Fensalir
Muninn's Egg(g)
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
Giga Excalibur
Sieglinde
Gleipnir
Storm Sieglinde
Siegmund
Flame Siegmund
Garm
Weirding Tome
Nidhogg
Vidofnir
Fruit of Idunn
Naglfar
Cursed Lance
Audhulma
Ivaldi
Great Flame
Spirit Breath
Ragnell
Urvan
Draconic Poleax
Wind's Brand
Resolute Blade
Amiti
Dauntless Lance
Nifl Frostflowers
Alondite
Thani
Dawn Suzu
Peshkatz
Cymbeline
Falchion(Awakening)
Sealed Falchion
Expiration
Solitary Blade
Skuld
Muspell Fireposy
Aversa's Night
Wolf Berg
Cherche's Axe
Grimoire
Geirskogul
Thogn
Missiletainn(Dark)
Grima's Truth
Yato
Draconic Rage
Urdr
Book of Shadows
Felicia's Plate
Raijinto
Hinoka's Spear
Warrior Princess
Fujin Yumi
Skadi
Breath of Blight
Siegfried
Camilla's Axe
Book of Dreams
Brynhildr
Odin's Grimoire
Hoarfrost Knife
Bright Naginata
Dark Greatsword
Missiletainn(Dusk)

Gjoll Sylgr Sinmara Imhullu
*/