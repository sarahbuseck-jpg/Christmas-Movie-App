
// routes/api.js
const express = require('express');
const router = express.Router();

const PORT = process.env.PORT || 3000;

// GET /api
router.get('/', (req, res) => {
    res.json({
        message: "ChristmasDB API Root",
        endpoints: {
            "All Actors": `http://localhost:${PORT}/api/actors`,
            "Hello": `http://localhost:${PORT}/api/hello`,
            "Echo (POST)": `http://localhost:${PORT}/api/echo`
        }
    });
});

// Example GET route
router.get('/hello', (req, res) => {
    res.json({ message: 'Hello from ChristmasDB!' });
});

// Example POST route
router.post('/echo', (req, res) => {
    res.json({ received: req.body });
});

// 404 handler for /api only
router.use((req, res) => {
    res.status(404).json({
        error: "API endpoint not found",
        path: req.originalUrl
    });
});

module.exports = router;
