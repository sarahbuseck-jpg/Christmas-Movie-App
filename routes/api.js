// routes/api.js
const express = require('express');
const router = express.Router();

// GET /api
router.get('/', (req, res) => {
  res.send('christmasdb25');
});

// Example GET route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from ChristmasDB!' });
});

// Example POST route
router.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});

module.exports = router;
