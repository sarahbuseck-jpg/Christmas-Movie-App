const express = require('express');
const router = express.Router();

const PORT = process.env.PORT || 3000;


router.get('/', (req, res) => {
    res.json({
        message: "ChristmasDB API Root",
        endpoints: {
            allActors: `http://localhost:${PORT}/api/actors`
        }
    });
});


console.log("routes.js loaded");

router.use('/actors', require ('./api/actorRoutes'))

router.get('/test', (req, res) => {
    res.send("Test route works");
});

router.use((req, res, next) => {
    res.status(404)
    .send('404 error this page does not exist')
        
    });

console.log("routes.js loaded");

module.exports = router;