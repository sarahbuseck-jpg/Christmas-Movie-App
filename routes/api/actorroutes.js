const express = require("express");
const router = express.Router();
const actorDao = require("../../daos/api/actorDao");

// ADD ACTOR
router.post('/add', async (req, res) => {
    const result = await actorDao.create(req, res);
    res.json(result);
});

// SEARCH ACTORS by last name (JSON)
router.get("/search/:term", (req, res) => {
    const term = req.params.term;
    actorDao.searchByLastName(res, term);
});

// GET ALL ACTORS
router.get("/", (req, res) => {
    actorDao.findAll(res);
});

// GET ACTOR BY ID
router.get("/:id", (req, res) => {
    actorDao.findById(res, req.params.id);
});

module.exports = router;

