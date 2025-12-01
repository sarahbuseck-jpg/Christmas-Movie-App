
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


router.get('/hello', (req, res) => {
    res.json({ message: 'Hello from ChristmasDB!' });
});
router.post('/echo', (req, res) => {
    res.json({ received: req.body });
});

// 404 handler for /api only
router.use((req, res, next) => {
    res.status(404)
    .send('<h1>404 error this page does not exist'</h1>)
        
    });


module.exports = router;
