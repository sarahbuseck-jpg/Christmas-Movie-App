const express = require("express");
const router = express.Router();
const db = require("../config/dbconfig");

// DAOs
const actorDao = require("../daos/api/actorDao");
const directorDao = require("../daos/api/directorDao");
const genreDao = require("../daos/api/genreDao");
const streamingDao = require("../daos/api/streamingDao");
const productionDao = require("../daos/api/productionDao");

// ---------------------------------------------
// HOME PAGE
// ---------------------------------------------
router.get("/", (req, res) => {
    res.render("home", { title: "Christmas DB" });
});

// ---------------------------------------------
// ACTORS PAGES
// ---------------------------------------------
router.get("/actors", async (req, res) => {
    const actors = await actorDao.findAllRaw();
    res.render("actors/list", { title: "Actors", actors });
});

router.get("/actors/add", (req, res) => {
    res.render("actors/add", { title: "Add Actor" });
});

// ---------------------------------------------
// DIRECTORS PAGES
// ---------------------------------------------
router.get("/directors", async (req, res) => {
    const directors = await directorDao.findAllRaw();
    res.render("directors/list", { title: "Directors", directors });
});

router.get("/directors/add", (req, res) => {
    res.render("directors/add", { title: "Add Director" });
});

// ---------------------------------------------
// GENRES PAGES
// ---------------------------------------------
router.get("/genres", async (req, res) => {
    const genres = await genreDao.findAllRaw();
    res.render("genres/list", { title: "Genres", genres });
});

// ==========================================
// STREAMINGS PAGE (HTML VIEW)
// ==========================================
router.get("/streamings", async (req, res) => {
    const streamings = await streamingDao.findAllRaw();
    res.render("streamings/list", { streamings });
});
    
// ---------------------------------------------
// PRODUCTIONS PAGES
// ---------------------------------------------
router.get("/productions", async (req, res) => {
    const productions = await productionDao.findAllRaw();
    res.render("productions/list", { title: "Production Companies", productions });
});

router.get("/productions/add", (req, res) => {
    res.render("productions/add", { title: "Add Production Company" });
});

// ---------------------------------------------
// PROGRAMS PAGE
// ---------------------------------------------
router.get("/programs", async (req, res) => {
    const programs = await db.query("SELECT * FROM program");
    res.render("programs/list", { title: "Programs", programs: programs[0] });
});

module.exports = router;