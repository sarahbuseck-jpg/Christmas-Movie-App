const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// ---------------------------------------------
// SECURITY
// ---------------------------------------------
app.use(
    helmet({
        contentSecurityPolicy: false
    })
);
app.use(cors());

// ---------------------------------------------
// BODY PARSER
// ---------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ---------------------------------------------
// STATIC + VIEWS
// ---------------------------------------------
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---------------------------------------------
// API ROUTES  (LOAD THESE FIRST)
// ---------------------------------------------
app.use("/api/actors", require("./routes/api/actorroutes"));
app.use("/api/productions", require("./routes/api/productionRoutes"));
app.use("/api/streaming", require("./routes/api/streamingRoutes"));
app.use("/api/genres", require("./routes/api/genreRoutes"));
app.use("/api/directors", require("./routes/api/directorRoutes"));

// ---------------------------------------------
// WEB ROUTES (AFTER API ROUTES)
// ---------------------------------------------
app.use("/", require("./routes/router"));

// ---------------------------------------------
// 404 PAGE
// ---------------------------------------------
app.use((req, res) => {
    res.status(404).render("errors/404", { title: "Not Found" });
});

// ---------------------------------------------
// START SERVER
// ---------------------------------------------
app.listen(3000, () =>
    console.log("Server running at http://localhost:3000")
);