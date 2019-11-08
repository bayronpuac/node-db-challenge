
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Bed', description: 'Used to take great naps'},
        {name: 'Computer', description: 'Used to code and watch Netflix'},
        {name: 'Food', description: 'Give me energy'},
        {name: 'Washer', description: 'Used to wash clothes.'},
        {name: 'Dryer', description: 'Used to dry clothes.'}
      ]);
    });
};
