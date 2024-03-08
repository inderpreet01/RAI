const JobVacancy = require('../models/Talent');
const Application = require('../models/Application');

// Create a new job vacancy
exports.createJobVacancy = async (req, res) => {
    try {
        const jobVacancy = new JobVacancy(req.body);
        await jobVacancy.save();
        res.status(201).json(jobVacancy);
    } catch (error) {
        res.status(400).json({ 
            message: error.message
         });
    }
};

// Get all job vacancies
exports.getAllJobVacancies = async (req, res) => {
    try {
        const jobVacancies = await JobVacancy.find();
        res.status(200).json(jobVacancies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get job vacancy by ID
exports.getJobVacancyById = async (req, res) => {
    try {
        const jobVacancy = await JobVacancy.findById(req.params.id);
        if (!jobVacancy) {
            return res.status(404).json({ message: 'Job vacancy not found' });
        }
        res.status(200).json(jobVacancy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update job vacancy
exports.updateJobVacancy = async (req, res) => {
    try {
        const jobVacancy = await JobVacancy.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!jobVacancy) {
            return res.status(404).json({ message: 'Job vacancy not found' });
        }
        res.status(200).json(jobVacancy);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete job vacancy
exports.deleteJobVacancy = async (req, res) => {
    try {
        const jobVacancy = await JobVacancy.findByIdAndDelete(req.params.id);
        if (!jobVacancy) {
            return res.status(404).json({ message: 'Job vacancy not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Apply for a job
exports.applyForJob = async (req, res) => {
    try {
        const { jobId, applicantName, email, resume } = req.body;

        // Check if job vacancy exists
        const jobVacancy = await JobVacancy.findById(jobId);
        if (!jobVacancy) {
            return res.status(404).json({ message: 'Job vacancy not found' });
        }

        // Create a new application
        const application = new Application({
            jobVacancy: jobId,
            applicantName,
            email,
            resume
        });

        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
