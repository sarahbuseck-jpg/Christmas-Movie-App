const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

// ---------------------------------------------
// SECURITY
// ---------------------------------------------
server.use(
    helmet({
        contentSecurityPolicy: false
    })
);
server.use(cors());

// ---------------------------------------------
// BODY PARSER
// ---------------------------------------------
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// ---------------------------------------------
// STATIC + VIEWS
// ---------------------------------------------
server.use(express.static(path.join(__dirname, "public")));
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

// API ROUTES
server.use("/api/actors", require("./routes/api/actorroutes"));
server.use("/api/directors", require("./routes/api/directorRoutes"));
server.use("/api/genres", require("./routes/api/genreRoutes"));
server.use("/api/streaming", require("./routes/api/streamingRoutes"));
server.use("/api/productions", require("./routes/api/productionRoutes"));

server.use("/", require("./routes/router"));
// 404 PAGE
// ---------------------------------------------
server.use((req, res) => {
    res.status(404).render("errors/404", { title: "Not Found" });
});

// ---------------------------------------------
// START SERVER
// ---------------------------------------------
server.listen(3000, () =>
    console.log("Server running at http://localhost:3000")
);