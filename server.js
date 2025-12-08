const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes  = require('./routes/router'); // your existing api router

const PORT = process.env.PORT || 3000;

/* ---------------------------
   View Engine (EJS)
---------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ---------------------------
   Security middleware
---------------------------- */
app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
  crossOriginResourcePolicy: false,
  crossOriginEmbedderPolicy: false,
  directives: {
    "img-src": ["'self'", "https:", "data:"],
    "script-src": ["'self'", "cdn.jsdelivr.net"]
  }
}));

/* ---------------------------
   Basic middleware
---------------------------- */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------------------
   Public images
---------------------------- */
app.use('/images', express.static(path.join(__dirname, 'public/images')));

/* ---------------------------
   API routes
---------------------------- */
app.use('/api', apiRoutes);
/* ---------------------------
   Home page using EJS
---------------------------- */
app.get('/', (req, res) => {
  res.render('home');   // renders views/home.ejs
});

/* ---------------------------
   404 page
---------------------------- */
app.use((req, res) => {
    res.status(404).render('errors/404');
});

/* ---------------------------
   Start server
---------------------------- */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use((req,res)=>{
    res.status(404).render('404');
});
/*
------HtmlRoutes----------
app.use('/', htmlRoutes);
*/