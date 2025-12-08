const express = require('express');
const router = express.Router();
const actorDao = require('../../daos/api/actorDao')

// GET /api/actors/search?first_name=...&last_name=...
router.get('/search', async (req, res) => {
  await actorDao.search(req, res);
});

// GET /api/actors/sort/:column
router.get('/sort/:column', async (req, res) => {
  await actorDao.sort(res, req.params.column);
});

// GET /api/actors/:id/movies
router.get('/:id/movies', async (req, res) => {
  await actorDao.findActorMovies(res, req.params.id);
});

// GET /api/actors/:id
router.get('/:id', async (req, res) => {
  await actorDao.findById(res, req.params.id);
});

// GET /api/actors - clickable HTML (should be last)
router.get('/', async (req, res) => {
  try {
    const actors = await actorDao.findAllRaw(); // Make sure this exists in actorDao

    const html = actors.map(actor => `
      <div style="margin-bottom: 20px;">
        <h3>${actor.first_name} ${actor.last_name}</h3>
        <p>ID: <a href="/api/actors/${actor.actor_id}">${actor.actor_id}</a></p>
        <p>Image: <a href="/images/${actor.img_url}" target="_blank">${actor.img_url}</a></p>
        <p>Created: ${actor.date_created}</p>
        <p>Last Update: ${actor.last_update}</p>
      </div>
    `).join('');

    res.send(html);

  } catch (error) {
    res.status(500).send('<h1>Server Error</h1>');
  }
});

module.exports = router;
