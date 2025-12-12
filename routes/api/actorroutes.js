const express = require("express");
const router = express.Router();
const actorDao = require("../../daos/api/actorDao");

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
// GET ALL ACTORS (HTML PAGE)
// ===============================
router.get("/", async (req, res) => {
    const actors = await actorDao.findAllRaw();
    res.render("actors/list", { title: "Actors", actors });
});

// ===============================
// ADD ACTOR PAGE
// ===============================
router.get("/add", (req, res) => {
    res.render("actors/add", { title: "Add Actor" });
});

// ===============================
// ACTOR DETAIL PAGE
// ===============================
router.get("/:id", async (req, res) => {
    const actor = await actorDao.findByIdRaw(req.params.id);
    res.render("actors/detail", { title: "Actor Details", actor });
});

module.exports = router;