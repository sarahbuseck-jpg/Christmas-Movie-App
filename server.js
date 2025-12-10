const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// ---------------------------------------
// Database Config
// ---------------------------------------
const db = require("./config/dbconfig");

// ---------------------------------------
// API Routes
// ---------------------------------------
const programApiRoutes = require("./routes/api/programRoutes");
const actorApiRoutes = require("./routes/api/actorRoutes");

// ---------------------------------------
// Middleware (Correct Order!)
// ---------------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Security middleware FIRST
app.use(helmet());
app.use(cors());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, "public")));


// ---------------------------------------
// API ROUTES
// ---------------------------------------
app.use("/api/programs", programApiRoutes);
app.use("/api/actors", actorApiRoutes);


// ---------------------------------------
// HTML ROUTES
// ---------------------------------------
app.get("/", (req, res) => res.render("home"));

// ACTOR LIST
app.get("/actors", async (req, res) => {
    const [actors] = await db.query("SELECT * FROM actor");
    res.render("actor/list", { actors });
});

// ADD ACTOR FORM
app.get("/actors/new", (req, res) => {
    res.render("actor/new");
});

// DIRECTORS
app.get("/directors", async (req, res) => {
    const [directors] = await db.query("SELECT * FROM director");
    res.render("directors/list", { directors });
});

// PROGRAM LIST
app.get("/programs", async (req, res) => {
    const [programs] = await db.query("SELECT * FROM program");
    res.render("programs/list", { programs });
});

// STREAMING PLATFORMS
app.get("/platforms", async (req, res) => {
    const [platforms] = await db.query("SELECT * FROM streaming_platform");
    res.render("platforms/list", { platforms });
});

// PRODUCERS
app.get("/producers", async (req, res) => {
    const [producers] = await db.query("SELECT * FROM producer");
    res.render("producers/list", { producers });
});


// ---------------------------------------
// 404 Page
// ---------------------------------------
app.use((req, res) => {
    res.status(404).render("errors/404");
});


// ---------------------------------------
// Start Server
// ---------------------------------------
app.listen(3000, () => {
    console.log("Server running at <http://localhost:3000>");

});