const express = require('express');
const router = express.Router();

router.use('/actors', require('./api/actorRoutes'));
router.use('/directors', require('./api/directorRoutes'));
router.use('/genres', require('./api/genreRoutes'));
router.use('/streamings', require('./api/streamingRoutes'));
router.use('/programs', require('./api/programRoutes'));

module.exports = router;