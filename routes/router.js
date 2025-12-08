const express = require('express');
const router = express.Router();

router.use('/actors', require('./api/actorRoutes'));
router.use('/directors', require('./api/directorRoutes'));
router.use('/genres', require('./api/genreRoutes'));
router.use('/streamings', require('./api/streamingRoutes'));
const db = require("../config/dbconfig");

router.get("/programs", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM program");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Cannot load programs" });
    }
});
module.exports = router;