const express = require("express");
const router = express.Router();
const actorDao = require("../../daos/api/actorDao");

// ===============================
// ADD ACTOR
// ===============================
router.post("/", async (req, res) => {
    try {
        const result = await actorDao.create(req.body);
        res.json({
            message: "Actor added",
            insertId: result.insertId
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error adding actor" });
    }
});

// ===============================
// SEARCH MUST COME BEFORE :id
// ===============================
router.get("/search/:term", (req, res) => {
    const term = req.params.term;
    actorDao.searchByLastName(res, term);
});

// ===============================
// DELETE ACTOR
// ===============================
router.delete("/:id", async (req, res) => {
    try {
        const success = await actorDao.delete(req.params.id);

        if (success) {
            return res.json({ message: "deleted" });
        } else {
            return res.status(400).json({ message: "delete failed" });
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "delete error" });
    }
});

// ===============================
// GET ALL ACTORS
// ===============================
router.get("/", (req, res) => {
    actorDao.findAll((actors) => {
        res.render("actor/list", { actors });
    });
});
router.get("/add", (req, res) => {
    res.render("actor/add");
});
// ===============================
// GET ACTOR BY ID
// ===============================
router.get("/:id", async (req, res) => {
    const actor = await actorDao.findByIdRaw(req.params.id);
    res.render("actor/detail", { actor });
});

module.exports = router;