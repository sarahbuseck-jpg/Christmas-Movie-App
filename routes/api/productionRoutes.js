const express = require('express');
const router = express.Router();
const productionDao = require('../../daos/api/productionDao');

// ------------------------------------------------------
// GET /api/productions  (list all)
router.get('/', async (req, res) => {
    try {
        const productions = await productionDao.findAllRaw();
        res.json(productions);
    } catch (err) {
        res.status(500).json({ error: "Cannot load productions" });
    }
});

// ------------------------------------------------------
// POST /api/productions  (add new production)
router.post('/', async (req, res) => {
    try {
        await productionDao.create(req, res);
        res.json({ message: "Production created" });
    } catch (err) {
        res.status(500).json({ error: "Cannot create production" });
    }
});

module.exports = router;