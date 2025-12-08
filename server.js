const express = require("express");
const path = require("path");
const db = require("./dbconfig");
const app = express();

// MIDDLEWARE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// HOME PAGE
app.get("/", (req, res) => {
    res.render("home");
});

/* ============================
      ACTORS ROUTES
============================ */
app.get("/actors", async (req, res) => {
    const [actors] = await db.query("SELECT * FROM actors");
    res.render("actor/list", { actors });
});

app.get("/actors/add", (req, res) => {
    res.render("actor/add");
});

app.post("/actors/add", async (req, res) => {
    const { first_name, last_name } = req.body;
    await db.query("INSERT INTO actors (first_name, last_name) VALUES (?, ?)", [first_name, last_name]);
    res.redirect("/actors");
});

/* ============================
     DIRECTORS ROUTES
============================ */
app.get("/directors", async (req, res) => {
    const [directors] = await db.query("SELECT * FROM directors");
    res.render("directors/list", { directors });
});

/* ============================
        GENRES ROUTES
============================ */
app.get("/genres", async (req, res) => {
    const [genres] = await db.query("SELECT * FROM genres");
    res.render("genres/list", { genres });
});

/* ============================
       PROGRAMS ROUTES
============================ */
app.get("/programs", async (req, res) => {
    const [programs] = await db.query("SELECT * FROM programs");
    res.render("programs/list", { programs });
});

/* ============================
      STREAMING ROUTES
============================ */
app.get("/streaming", async (req, res) => {
    const [streaming] = await db.query("SELECT * FROM streaming");
    res.render("streaming/list", { streaming });
});

/* ============================
     PRODUCTION ROUTES
============================ */
app.get("/production", async (req, res) => {
    const [production] = await db.query("SELECT * FROM production");
    res.render("production/list", { production });
});

/* ============================
         404 ERROR
============================ */
app.use((req, res) => {
    res.status(404).render("errors/404");
});

// SERVER LISTEN
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});