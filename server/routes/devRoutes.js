const express = require('express');
const devController = require('../controllers/devController');

const router = express.Router();

// ROUTES
router.route('/signupEmrit').post(devController.signupSheet);
router.route('/contactEmrit').post(devController.contactSheet);

module.exports = router;
