const TaskProject = require('../models/TaskProject');

// Create a new task/project
exports.createTaskProject = async (req, res) => {
    try {
        const taskProject = new TaskProject(req.body);
        await taskProject.save();
        res.status(201).json(taskProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all tasks/projects
exports.getAllTaskProjects = async (req, res) => {
    try {
        const taskProjects = await TaskProject.find();
        res.status(200).json(taskProjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get task/project by ID
exports.getTaskProjectById = async (req, res) => {
    try {
        const taskProject = await TaskProject.findById(req.params.id);
        if (!taskProject) {
            return res.status(404).json({ 
                message: 'Task/project not found' 
            });
        }
        res.status(200).json(taskProject);
    } catch (error) {
        res.status(500).json({ 
            message: error.message 
        });
    }
};

// Update task/project
exports.updateTaskProject = async (req, res) => {
    try {
        const taskProject = await TaskProject.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!taskProject) {
            return res.status(404).json({ 
                message: 'Task/project not found' 
            });
        }
        res.status(200).json(taskProject);
    } catch (error) {
        res.status(400).json({
             message: error.message 
            });
    }
};

// Delete task/project
exports.deleteTaskProject = async (req, res) => {
    try {
        const taskProject = await TaskProject.findByIdAndDelete(req.params.id);
        if (!taskProject) {
            return res.status(404).json({ 
                message: 'Task/project not found' 
            });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({
             message: error.message
             });
    }
};
