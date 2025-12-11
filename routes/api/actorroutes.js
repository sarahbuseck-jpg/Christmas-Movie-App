const express = require("express");
const router = express.Router();
const actorDao = require("../../daos/api/actorDao");

// ------------------------------------------------------
// GET ALL ACTORS
// ------------------------------------------------------
router.get("/", (req, res) => {
    actorDao.findAll((err, rows) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }
        res.json(rows);
    });
});

// ------------------------------------------------------
// GET ACTOR BY ID
// ------------------------------------------------------
router.get("/:id", (req, res) => {
    const id = req.params.id;

    actorDao.findById(id, (err, rows) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: "Actor not found" });
        }

        res.json(rows[0]);
    });
});
// SEARCH ACTOR BY///
app.get("/api/actors/search/:term", async (req, res) => {
    actorDao.searchByLastName(res, req.params.term);
});



module.exports = router;