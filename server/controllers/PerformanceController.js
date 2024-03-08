const PerformanceReview = require('../models/PerformanceReview');

// Create a new performance review
exports.createPerformanceReview = async (req, res) => {
    try {
        const performanceReview = new PerformanceReview(req.body);
        await performanceReview.save();
        res.status(201).json(performanceReview);
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        });
    }
};

// Get all performance reviews
exports.getAllPerformanceReviews = async (req, res) => {
    try {
        const performanceReviews = await PerformanceReview.find();
        res.status(200).json(performanceReviews);
    } catch (error) {
        res.status(500).json({ 
            message: error.message
         });
    }
};

// Get performance review by ID
exports.getPerformanceReviewById = async (req, res) => {
    try {
        const performanceReview = await PerformanceReview.findById(req.params.id);
        if (!performanceReview) {
            return res.status(404).json({
                 message: 'Performance review not found'
                 });
        }
        res.status(200).json(performanceReview);
    } catch (error) {
        res.status(500).json({
             message: error.message 
            });
    }
};

// Update performance review
exports.updatePerformanceReview = async (req, res) => {
    try {
        const performanceReview = await PerformanceReview.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!performanceReview) {
            return res.status(404).json({ 
                message: 'Performance review not found' 
            });
        }
        res.status(200).json(performanceReview);
    } catch (error) {
        res.status(400).json({
             message: error.message 
            });
    }
};

// Delete performance review
exports.deletePerformanceReview = async (req, res) => {
    try {
        const performanceReview = await PerformanceReview.findByIdAndDelete(req.params.id);
        if (!performanceReview) {
            return res.status(404).json({ 
                message: 'Performance review not found' 
            });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        });
    }
};
