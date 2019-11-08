
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Clean House', description : 'Start vacumming the house', completed: false},
        {name: 'Watch Netflix', description : 'Watch my favorite show', completed: false},
        {name: 'Take a nap', description : 'Sleep until I want', completed: false}
      ]);
    });
};
