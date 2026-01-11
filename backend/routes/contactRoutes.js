const express = require('express');
const router = express.Router();
// Naam change karke controller se match kijiye
const { sendContactMessage } = require('../controllers/contactController');

// Route ko update kijiye
router.post('/send', sendContactMessage);

module.exports = router;