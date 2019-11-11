const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

// project
router.get('/projects', (req, res) => {
    Projects.retrieveProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to retrieve projects.' });
        });
});

router.post('/projects', (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to create new project.' });
        });
});

// resources
router.get('/resources', (req, res) => {
    Projects.retrieveResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to retrieve resources.' });
        });
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;

    Projects.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to create new resource.' });
        });
});

// tasks
router.get('/tasks', (req, res) => {
    Projects.retrieveTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to retrieve tasks.' });
        });
});

router.post('/tasks', (req, res) => {
    const taskData = req.body;

    Projects.addTask(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to create new task.' });
        });
});


module.exports = router;