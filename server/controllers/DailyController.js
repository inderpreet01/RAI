const DailyReport = require('../models/DailyReport');

// Create a new daily report
exports.createDailyReport = async (req, res) => {
    try {
        const dailyReport = new DailyReport(req.body);
        await dailyReport.save();
        res.status(201).json(dailyReport);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all daily reports
exports.getAllDailyReports = async (req, res) => {
    try {
        const dailyReports = await DailyReport.find();
        res.status(200).json(dailyReports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get daily report by ID
exports.getDailyReportById = async (req, res) => {
    try {
        const dailyReport = await DailyReport.findById(req.params.id);
        if (!dailyReport) {
            return res.status(404).json({ message: 'Daily report not found' });
        }
        res.status(200).json(dailyReport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update daily report
exports.updateDailyReport = async (req, res) => {
    try {
        const dailyReport = await DailyReport.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!dailyReport) {
            return res.status(404).json({ message: 'Daily report not found' });
        }
        res.status(200).json(dailyReport);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete daily report
exports.deleteDailyReport = async (req, res) => {
    try {
        const dailyReport = await DailyReport.findByIdAndDelete(req.params.id);
        if (!dailyReport) {
            return res.status(404).json({ message: 'Daily report not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
