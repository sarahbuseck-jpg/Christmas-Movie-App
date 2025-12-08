const express = require('express');
const router = express.Router();
const directorDao = require('../../daos/api/directorDao');

// ---------------------------------------------------
// GET /api/directors  → list all directors
// ---------------------------------------------------
router.get('/', async (req, res) => {
  directorDao.findAll(res);
});

// ---------------------------------------------------
// GET /api/directors/:id → get one director
// ---------------------------------------------------
router.get('/:id', async (req, res) => {
  directorDao.findById(res, req.params.id);
});

// ---------------------------------------------------
// GET /api/directors/sort/:column → sort directors
// Example: /api/directors/sort/first_name
// ---------------------------------------------------
router.get('/sort/:column', async (req, res) => {
  directorDao.sort(res, req.params.column);
});

// ---------------------------------------------------
// GET /api/directors/search?first_name=X&last_name=Y
// ---------------------------------------------------
router.get('/search', async (req, res) => {
  directorDao.searchByName(req, res);
});

// ---------------------------------------------------
// GET /api/directors/:id/programs → all programs by director
// ---------------------------------------------------
router.get('/:id/programs', async (req, res) => {
  directorDao.findDirectorPrograms(res, req.params.id);
});

// ---------------------------------------------------
// POST /api/directors → create new director
// ---------------------------------------------------
router.post('/', async (req, res) => {
  directorDao.create(req, res);
});

// ---------------------------------------------------
// PUT /api/directors/:id → update director
// ---------------------------------------------------
router.put('/:id', async (req, res) => {
  directorDao.update(req, res);
});

// ---------------------------------------------------
// DELETE /api/directors/:id → remove director
// ---------------------------------------------------
router.delete('/:id', async (req, res) => {
  directorDao.delete(res, req.params.id);
});

module.exports = router;