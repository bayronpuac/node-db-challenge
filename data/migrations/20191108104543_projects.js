
exports.up = function(knex) {
    return knex.schema 
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.text('description');
        tbl.boolean('completed').notNullable().defaultTo(false);
    }) 
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique();
        tbl.text('description');
    })
    // .createTable('project_resources', tbl => {
    //     tbl.integer('project_id').unsigned().notNullable()
    //         .references('id')
    //         .inTable('projects')
    //         .onDelete('CASCADE')
    //         .onUpdate('CASCADE');
    //     tbl.integer('resource_id').unsigned().notNullable()
    //         .references('id')
    //         .inTable('resources')
    //         .onDelete('CASCADE')
    //         .onUpdate('CASCADE');
    //     tbl.primary(['project_id', 'resource_id']);
    // })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('description', 128).notNullable();
      tbl.text('notes', 128);
      tbl.boolean('completed').defaultTo(false);
    //   tbl.integer('project_id');
  })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('project_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
  };
  