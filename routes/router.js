const express = require('express');
const router = express.Router();

router.use('/actors', require('./api/actorRoutes'));
router.use('/directors', require('./api/directorRoutes'));
router.use('/genres', require('./api/genreRoutes'));
router.use('/streamings', require('./api/streamingRoutes'));
router.use('/programs', require('./api/programRoutes'));
router.get("/programs", async(req,res)=>{
    res.json([
        { id:1, name:"Christmas Play" },
        { id:2, name:"Winter Show" }
    ]);
});
module.exports = router;