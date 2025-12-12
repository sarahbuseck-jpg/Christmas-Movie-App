const express = require("express");
const router = express.Router();
const db = require("../config/dbconfig");

const actorDao = require("../daos/api/actorDao");
const directorDao = require("../daos/api/directorDao");
const genreDao = require("../daos/api/genreDao");
const programDao = require("../daos/api/programDao");

// HOME PAGE
router.get("/", (req, res) => {
    res.render("home", { title: "Christmas DB" });
});
//

// ---------------------------------------------
// ACTORS PAGES
// ---------------------------------------------
router.get("/actors", async (req, res) => {
    const [actors] = await db.query("SELECT * FROM actors");
    res.render("actors/list", { title: "Actors", actors });
});

router.get("/actors/add", (req, res) => {
    res.render("actors/add", { title: "Add Actor" });
});

router.get("/actors/search", (req, res) => {
    res.render("actors/search", { title: "Search Actors" });
});
// WEB DIRECTORS PAGE
router.get('/directors', async (req, res) => {
    const directors = await directorDao.findAllRaw();
    res.render('directors/list', { directors });
});

router.get('/directors/add', (req, res) => {
    res.render('directors/add');
});

router.post('/directors/add', async (req, res) => {
    await directorDao.create(req, res, 'director');
    res.redirect('/directors');
});

// ---------------------------------------------
// PROGRAMS PAGE (if needed)
// ---------------------------------------------
router.get("/programs", async (req, res) => {
    const [programs] = await db.query("SELECT * FROM program");
    res.render("programs/list", { title: "Programs", programs });
});

router.get('/genres', async (req, res) => {
    try {
        const genres = await genreDao.findAllRaw();   // <--- uses RAW query
        res.render('genres/list', { genres });
    } catch (err) {
        res.status(500).send("Error loading genres");
    }
});
// ---------------------------------------------
// STREAMINGS (Option A)
// ---------------------------------------------
router.get('/streamings', async (req, res) => {
    const [streamings] = await db.query("SELECT * FROM streamings");
    res.render('streamings/list', { title: "Streamings", streamings });
});

router.get('/streamings/add', (req, res) => {
    res.render('streamings/add', { title: "Add Streaming Platform" });
});

router.post('/streamings/add', async (req, res) => {
    const { streaming_name } = req.body;
    await db.query("INSERT INTO streamings (streaming_name) VALUES (?)", [
        streaming_name,
    ]);
    res.redirect('/streamings');
});
// PRODUCTION COMPANIES PAGE
// ---------------------------------------------
// PRODUCTIONS WEB PAGE
// ---------------------------------------------
// ---------------------------------------------
// PRODUCTIONS WEB PAGE
// ---------------------------------------------
router.get("/productions", async (req, res) => {
    try {
        const [productions] = await db.query("SELECT * FROM productions");
        res.render("productions/list", { title: "Productions", productions });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading productions");
    }
});

module.exports = router;