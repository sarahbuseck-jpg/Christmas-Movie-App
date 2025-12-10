const express = require("express");
const path = require("path");
const db = require("./config/dbconfig");

const app = express();

// =============================
// MIDDLEWARE
// =============================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body parser
app.use(express.urlencoded({ extended: true }));

// Public folder (static files: CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));


// =============================
// HOME PAGE
// =============================
app.get("/", (req, res) => {
    res.render("home");
});


// =============================
// ACTORS ROUTES
// =============================
app.get("/actors", async (req, res) => {
    const [actors] = await db.query("SELECT * FROM actors");
    res.render("actor/list", { actors });
});

app.get("/actors/add", (req, res) => {
    res.render("actor/add");
});

app.post("/actors/add", async (req, res) => {
    const { first_name, last_name } = req.body;
    await db.query(
        "INSERT INTO actors(first_name, last_name) VALUES (?, ?)",
        [first_name, last_name]
    );
    res.redirect("/actors");
});


// =============================
// DIRECTORS ROUTES
// =============================
app.get("/directors", async (req, res) => {
    const [directors] = await db.query("SELECT * FROM directors");
    res.render("directors/list", { directors });
});


// =============================
// GENRES ROUTES
// =============================
app.get("/genres", async (req, res) => {
    const [genres] = await db.query("SELECT * FROM genres");
    res.render("genres/list", { genres });
});


// =============================
// PROGRAM ROUTES
// =============================
app.get("/programs", async (req, res) => {
    const [programs] = await db.query("SELECT * FROM program");
    res.render("programs/list", { programs });
});


// =============================
// STREAMING ROUTES
// =============================
app.get("/streamings", async (req, res) => {
    const [streamings] = await db.query("SELECT * FROM streamings");
    res.render("streamings/list", { streamings });
});


// =============================
// PRODUCTION ROUTES
// =============================
app.get("/productions", async (req, res) => {
    const [productions] = await db.query("SELECT * FROM productions");
    res.render("productions/list", { productions });
});


// =============================
// 404 PAGE
// =============================
app.use((req, res) => {
    res.status(404).render("errors/404");
});


// =============================
// SERVER LISTEN
// =============================
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});