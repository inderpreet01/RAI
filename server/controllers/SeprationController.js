const Separation = require('../models/Separation');

// Create a new separation record
exports.createSeparation = async (req, res) => {
    try {
        const separation = new Separation(req.body);
        await separation.save();
        res.status(201).json(separation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all separation records
exports.getAllSeparations = async (req, res) => {
    try {
        const separations = await Separation.find();
        res.status(200).json(separations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get separation record by ID
exports.getSeparationById = async (req, res) => {
    try {
        const separation = await Separation.findById(req.params.id);
        if (!separation) {
            return res.status(404).json({ message: 'Separation record not found' });
        }
        res.status(200).json(separation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update separation record
exports.updateSeparation = async (req, res) => {
    try {
        const separation = await Separation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!separation) {
            return res.status(404).json({ message: 'Separation record not found' });
        }
        res.status(200).json(separation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete separation record
exports.deleteSeparation = async (req, res) => {
    try {
        const separation = await Separation.findByIdAndDelete(req.params.id);
        if (!separation) {
            return res.status(404).json({ message: 'Separation record not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
