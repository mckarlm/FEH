
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('unit_bases').del()
    .then(function () {
      // Inserts seed entries
      return knex('unit_bases').insert([
        {
          name: '',
          description: '',
          origin: '',
          wpn_type: '',
          move_type: '',
          color: '',
          brave: false,
          legend: false
        },
        {
          name: '',
          description: '',
          origin: '',
          wpn_type: '',
          move_type: '',
          color: '',
          brave: false,
          legend: false
        },
        {
          name: '',
          description: '',
          origin: '',
          wpn_type: '',
          move_type: '',
          color: '',
          brave: false,
          legend: false
        }
      ]);
    });
};
