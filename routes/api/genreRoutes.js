const express = require('express');
const router = express.Router();
const genreDao = require('../../daos/api/genreDao');
// ------------------------------------------------------
// GET /api/genres  (get all genres)
router.get('/', async (req, res) => {
  await genreDao.findAll(res);
});

// ------------------------------------------------------
// GET /api/genres/:id  (get genre by ID)
router.get('/:id', async (req, res) => {
  await genreDao.findById(res, req.params.id);
});

// ------------------------------------------------------
// GET /api/genres/sort/:column  (sort genres)
router.get('/sort/:column', async (req, res) => {
  await genreDao.sort(res, req.params.column);
});

// ------------------------------------------------------
// GET /api/genres/search?name=rom  (search by name)
router.get('/search', async (req, res) => {
  await genreDao.searchByName(req, res);
});

// ------------------------------------------------------
// GET /api/genres/:id/programs  (unique method)
router.get('/:id/programs', async (req, res) => {
  await genreDao.findProgramsByGenre(res, req.params.id);
});

// ------------------------------------------------------
// POST /api/genres  (create a genre)
router.post('/', async (req, res) => {
  await genreDao.create(req, res);
});

// ------------------------------------------------------
// PUT /api/genres/:id  (update a genre)
router.put('/:id', async (req, res) => {
  await genreDao.update(req, res);
});

// ------------------------------------------------------
// DELETE /api/genres/:id  (delete a genre)
router.delete('/:id', async (req, res) => {
  await genreDao.delete(res, req.params.id);
});

module.exports = router;