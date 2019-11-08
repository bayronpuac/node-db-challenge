
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Take a nap!', notes: 'Really needed it', completed: true},
        {description: 'Chill and relax', notes: 'Need to drop off my brother at the airport', completed: true},
        {description: 'Need to take out my dogs', notes: 'Done and done', completed: false},
        {description: 'Clean my room', notes: 'Clean my room very well', completed: false },
        {description: 'Turn on the washer.', notes: 'cant without having the dirty clothes inside!', completed: false},
        {description: 'Take another nap later.', notes: 'I really need that nap', completed: false }
      ]);
    });
};
