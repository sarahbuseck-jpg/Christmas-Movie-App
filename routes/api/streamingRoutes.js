const express = require('express');
const router = express.Router();
const streamingDao = require('../../daos/api/streamingDao');
// Standard CRUD
router.get('/', (req, res) => streamingDao.findAll(res));
router.get('/:id', (req, res) => streamingDao.findById(res, req.params.id));
router.post('/', (req, res) => streamingDao.create(req, res));
router.put('/:id', (req, res) => streamingDao.update(req, res));
router.delete('/:id', (req, res) => streamingDao.delete(res, req.params.id));
router.get('/sort/:column', (req, res) => streamingDao.sort(res, req.params.column));

// Unique routes
router.get('/platform/:platform_id', (req, res) => streamingDao.findByPlatform(res, req.params.platform_id));
router.get('/active', (req, res) => streamingDao.findActiveStreams(res));

module.exports = router;