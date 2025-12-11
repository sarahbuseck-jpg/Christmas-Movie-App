const express = require("express");
const router = express.Router();
const actorDao = require("../../daos/api/actorDao");

// ADD PAGE
router.get("/add-page", (req, res) => {
    res.render("actor/add", { title: "Add Actor" });
});

// SEARCH PAGE
router.get("/search-page", (req, res) => {
    res.render("actor/search", { title: "Search Actors" });
});

// ADD ACTOR
router.post("/add", (req, res) => {
    actorDao.create(req, res);
});

// SEARCH ACTOR
router.get("/search/:term", (req, res) => {
  daoCommon.search(res, "actors", "last_name", req.params.term);
});


// GET ALL
router.get("/", (req, res) => {
    actorDao.findAll(res);
});

// GET BY ID
router.get("/:id", (req, res) => {
    actorDao.findById(res, req.params.id);
});

module.exports = router;