// authMiddleware.js
const jwt = require('jsonwebtoken');
const HRUser = require('../models/HrUser');

// Middleware for authentication
exports.authenticateUser = async (req, res, next) => {
    try {
        // Check if the request contains a valid JWT token
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user to the request object
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token.' });
    }
};

// Middleware for authorization
exports.authorizeUser = async (req, res, next) => {
    try {
        // Get the user ID from the request object (attached by authenticateUser middleware)
        const userId = req.user.id;

        // Check if the user is an HR user
        const user = await HRUser.findById(userId);
        if (!user) {
            return res.status(403).json({ message: 'Forbidden. User is not authorized.' });
        }

        // Check if the user has appropriate permissions
        if (!user.approvalOfEmployee) {
            return res.status(403).json({ message: 'Forbidden. User does not have permission.' });
        }

        next(); // User is authorized, proceed to the next middleware/route handler
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
