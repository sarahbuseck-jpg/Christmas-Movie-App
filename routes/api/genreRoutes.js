const express = require('express');
const router = express.Router();
const genreDao = require('../../daos/api/genreDao');

// GET /api/genres  (all genres)
router.get('/', async (req, res) => {
  await genreDao.findAll(res);
});

// IMPORTANT: SPECIAL ROUTES FIRST

// GET /api/genres/search?name=rom
router.get('/search', async (req, res) => {
  await genreDao.searchByName(req, res);
});

// GET /api/genres/sort/:column
router.get('/sort/:column', async (req, res) => {
  await genreDao.sort(res, req.params.column);
});

// GET /api/genres/:id/programs
router.get('/:id/programs', async (req, res) => {
  await genreDao.findProgramsByGenre(res, req.params.id);
});

// NOW SAFE TO USE ID ROUTE
router.get('/:id', async (req, res) => {
  await genreDao.findById(res, req.params.id);
});



// UPDATE
router.put('/:id', async (req, res) => {
  await genreDao.update(req, res);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await genreDao.delete(res, req.params.id);
});

module.exports = router;