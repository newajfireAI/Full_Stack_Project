const express = require('express');
const _ = express.Router();
const authMiddleware = require('../../../middleware/authMiddleware');
const roleMiddleware = require('../../../middleware/roleMiddleware');

// Protected route example - requires authentication
_.get('/profile', authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Profile data retrieved',
        data: {
            userId: req.user.userId,
            email: req.user.email,
            role: req.user.role
        }
    });
});

// Admin only route example
_.get('/admin/users', authMiddleware, roleMiddleware('admin'), (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Admin access granted',
        data: {
            message: 'This is an admin-only endpoint'
        }
    });
});

// Logout endpoint
_.post('/logout', authMiddleware, (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: 'Logged out successfully'
    });
});

module.exports = _;
