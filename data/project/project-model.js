const db = require('../../db-config');

module.exports = {
    projectId,
    addProject,
    retrieveProjects,
    resourceId,
    addResource,
    retrieveResources,
    taskId,
    addTask,
    retrieveTasks
}

function projectId(id) {
    return db('projects')
        .where({ id })
        .first();
};

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => {
            return projectId(id);
        });
};

function retrieveProjects() {
    return db('projects');
};

function resourceId(id) {
    return db('resources')
        .where({ id })
        .first();
};

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => {
            return resourceId(id);
        });
};

function retrieveResources() {
    return db('resources');
};

function taskId(id) {
    return db('tasks')
        .where({ id })
        .first();
};

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(([id]) => {
            return taskId(id);
        });
};

function retrieveTasks() {
    return db('tasks')
    .select('tasks.id', 'tasks.description as tasks_description', 'tasks.notes', 'tasks.completed', 'projects.name', 'projects.description as project_description')
    .join('projects', 'projects.id', 'tasks.project_id')
}