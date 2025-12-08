const express = require('express');
const router = express.Router();

const programDao = require('../../daos/api/programDao');

// JSON
router.get('/', async (req, res) => {
  await programDao.findAll(res);
});

// HTML
router.get('/html', async (req, res) => {
  try {
    const programs = await programDao.findAllRaw();

    const html = programs.map(program => `
      <div style="margin-bottom:20px;">
        <h3>${program.title} (${program.rating})</h3>
        <p>ID: <a href="/api/programs/${program.program_id}">${program.program_id}</a></p>
        <p>${program.description || 'N/A'}</p>
      </div>
    `).join('');

    res.send(`
      <html>
        <body>
          <h1>Programs</h1>
          ${html}
        </body>
      </html>
    `);

  } catch (err) {
    res.status(500).send("Server error");
  }
});

// rating
router.get('/rating/:rating', async (req, res) => {
  await programDao.findByRating(res, req.params.rating);
});

// streaming
router.get('/streaming/:platform', async (req, res) => {
  await programDao.findByStreamingPlatform(res, req.params.platform);
});

// must be last
router.get('/:id', async (req, res) => {
  await programDao.findById(res, req.params.id);
});
app.get('/directors', async (req,res)=>{
    try {
        const response = await axios.get('http://localhost:3000/api/directors');
        res.render("directors/list", { directors: response.data });
    } 
    catch(err) {
        console.error(err);
        res.status(500).send("Error loading directors");
    }
});

// ------------------------------
// Genres Page
// ------------------------------
app.get('/genres', async (req,res)=>{
    try {
        const response = await axios.get('http://localhost:3000/api/genres');
        res.render("genres/list", { genres: response.data });
    } 
    catch(err) {
        console.error(err);
        res.status(500).send("Error loading genres");
    }
});

// ------------------------------
// Streaming Platforms Page
// ------------------------------
app.get('/streamings', async (req,res)=>{
    try {
        const response = await axios.get('http://localhost:3000/api/streamings');
        res.render("streamings/list", { streamings: response.data });
    } 
    catch(err) {
        console.error(err);
        res.status(500).send("Error loading streamings");
    }
});
module.exports = router;