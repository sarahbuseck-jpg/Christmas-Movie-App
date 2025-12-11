const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const db = require("./config/dbconfig");

const app = express();
const axios = require("axios");

app.get("/test-api", async (req, res) => {
    try {
        const response = await axios.get("https://api.github.com");
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "API failed", details: err });
    }
});
// ------------------------
// HELMET FIX
// ------------------------
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
                styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
                imgSrc: ["'self'", "data:", "blob:"],
                fontSrc: ["'self'", "https://cdn.jsdelivr.net"],
            },
        },
    })
);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// ------------------------------------------------------
// HOME PAGE
// ------------------------------------------------------
app.get("/", (req, res) => {
    res.render("home", { title: "Christmas DB" });
});


// ------------------------------------------------------
// ACTORS PAGE
// ------------------------------------------------------
app.get("/actors", async (req, res) => {
    const [actors] = await db.query("SELECT * FROM actors");
    res.render("actor/list", { title: "Actors", actors });
});


// ------------------------------------------------------
// PROGRAMS PAGE
// ------------------------------------------------------
app.get("/programs", async (req, res) => {
    const [programs] = await db.query(
        "SELECT program_id, title, yr_released, poster FROM program"
    );

    res.render("programs/list", { title: "Programs", programs });
});

// ------------------------------------------------------
// DIRECTORS PAGE
// ------------------------------------------------------
app.get("/directors", async (req, res) => {
    const [directors] = await db.query("SELECT * FROM directors");
    res.render("directors/list", { title: "Directors", directors });
});


// ------------------------------------------------------
// GENRES PAGE
// ------------------------------------------------------
app.get("/genres", async (req, res) => {
    const [genres] = await db.query("SELECT * FROM genres");
    res.render("genres/list", { title: "Genres", genres });
});


// ------------------------------------------------------
// STREAMINGS PAGE
// ------------------------------------------------------
app.get("/streamings", async (req, res) => {
    const [streamings] = await db.query("SELECT * FROM streamings");
    res.render("streamings/list", { title: "Streaming Platforms", streamings });
});


// ------------------------------------------------------
// PRODUCTIONS PAGE
// ------------------------------------------------------
app.get("/productions", async (req, res) => {
    const [productions] = await db.query("SELECT * FROM productions");
    res.render("productions/list", { title: "Productions", productions });
});


// ------------------------------------------------------
// 404 PAGE
// ------------------------------------------------------
app.use((req, res) => {
    res.status(404).render("errors/404", { title: "Not Found" });
});


// ------------------------------------------------------
// START SERVER — NOTHING AFTER THIS LINE
// ------------------------------------------------------
app.listen(3000, () =>
    console.log("Server running at http://localhost:3000")
);