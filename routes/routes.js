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




router.use('/api/actor', require ('./api/acotRoutes'))



router.use((req, res, next) => {
    res.status(404)
    .send('404 error this page does not exist')
        
    });


module.exports = router;