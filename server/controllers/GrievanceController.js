const Grievance = require('../models/Grievance');

// Create a new grievance
exports.createGrievance = async (req, res) => {
    try {
        const grievance = new Grievance(req.body);
        await grievance.save();
        res.status(201).json(grievance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all grievances
exports.getAllGrievances = async (req, res) => {
    try {
        const grievances = await Grievance.find();
        res.status(200).json(grievances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get grievance by ID
exports.getGrievanceById = async (req, res) => {
    try {
        const grievance = await Grievance.findById(req.params.id);
        if (!grievance) {
            return res.status(404).json({ message: 'Grievance not found' });
        }
        res.status(200).json(grievance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update grievance
exports.updateGrievance = async (req, res) => {
    try {
        const grievance = await Grievance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!grievance) {
            return res.status(404).json({ message: 'Grievance not found' });
        }
        res.status(200).json(grievance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete grievance
exports.deleteGrievance = async (req, res) => {
    try {
        const grievance = await Grievance.findByIdAndDelete(req.params.id);
        if (!grievance) {
            return res.status(404).json({ message: 'Grievance not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
