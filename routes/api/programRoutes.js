const express = require('express');
const router = express.Router();

const programDao = require('../../daos/api/programDao');

// -------------------------------------
// GET ALL PROGRAMS (JSON)
// GET /api/programs
// -------------------------------------
router.get('/', async (req, res) => {
    try {
        await programDao.findAll(res);   // DAO handles res.json()
    } catch (err) {
        console.error("Error fetching programs:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// -------------------------------------
// GET PROGRAMS BY RATING
// GET /api/programs/rating/:rating
// -------------------------------------
router.get('/rating/:rating', async (req, res) => {
    try {
        await programDao.findByRating(res, req.params.rating);
    } catch (err) {
        console.error("Error fetching by rating:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// -------------------------------------
// GET PROGRAMS BY STREAMING PLATFORM
// GET /api/programs/streaming/:platform
// -------------------------------------
router.get('/streaming/:platform', async (req, res) => {
    try {
        await programDao.findByStreamingPlatform(res, req.params.platform);
    } catch (err) {
        console.error("Error fetching by platform:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// -------------------------------------
// GET ONE PROGRAM BY ID
// GET /api/programs/:id
// -------------------------------------
router.get('/:id', async (req, res) => {
    try {
        await programDao.findById(res, req.params.id);
    } catch (err) {
        console.error("Error fetching program by ID:", err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;

