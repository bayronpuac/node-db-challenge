
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
   
    .createTable('tasks', tbl => {
      tbl.increments();

      tbl.text('description', 128).notNullable();
      tbl.text('notes', 128);
      tbl.boolean('completed').notNullable().defaultTo(false);

      tbl.integer('project_id').unsigned().notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
  })
  .createTable('projects_resources', tbl => {
    tbl.increments()

    tbl
    .integer('project_id').unsigned().notNullable()
    .references('id')
    .inTable('projects')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    tbl
    .integer('resource_id').unsigned().notNullable()
    .references('id')
    .inTable('resources')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');
  })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('projects_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
  };
  