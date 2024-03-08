const HRUser = require('../models/HrUser');

// Create a new HR user
exports.createHRUser = async (req, res) => {
    try {
        const hrUser = new HRUser(req.body);
        await hrUser.save();
        res.status(201).json(hrUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all HR users
exports.getAllHRUsers = async (req, res) => {
    try {
        const hrUsers = await HRUser.find();
        res.status(200).json(hrUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get HR user by ID
exports.getHRUserById = async (req, res) => {
    try {
        const hrUser = await HRUser.findById(req.params.id);
        if (!hrUser) {
            return res.status(404).json({ message: 'HR user not found' });
        }
        res.status(200).json(hrUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update HR user
exports.updateHRUser = async (req, res) => {
    try {
        const hrUser = await HRUser.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!hrUser) {
            return res.status(404).json({ message: 'HR user not found' });
        }
        res.status(200).json(hrUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete HR user
exports.deleteHRUser = async (req, res) => {
    try {
        const hrUser = await HRUser.findByIdAndDelete(req.params.id);
        if (!hrUser) {
            return res.status(404).json({ message: 'HR user not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
