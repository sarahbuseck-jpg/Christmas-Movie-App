const express = require('express');
const router = express.Router();

const actorDao = require('../daos/api/actorDao');
const directorDao = require('../daos/api/directorDao');
const genreDao = require('../daos/api/genreDao');
const programDao = require('../daos/api/programDao');

// ---------------------
// ACTORS
// ---------------------

router.get('/actors', async (req,res) => {
    const actors = await actorDao.findAllRaw();
    res.render('actor/list', { actors });
});

router.get('/actors/add', (req,res)=>{
    res.render('actor/add');
});



router.get('/actors/:id', async (req,res)=>{
    const actor = await actorDao.findByIdRaw(req.params.id);
    res.render('actor/detail', { actor });
});
router.get('/actor', (req, res) => {
    res.redirect('/actors');
});

// ---------------------
// DIRECTORS
// ---------------------

router.get('/directors', async (req,res)=>{
    const directors = await directorDao.findAllRaw();
    res.render('directors/list', { directors });
});

router.get('/directors/add', (req,res)=>{
    res.render('directors/add');
});



router.get('/directors/:id', async (req,res)=>{
    const director = await directorDao.findByIdRaw(req.params.id);
    res.render('directors/detail', { director });
});

// ---------------------
// GENRES
// ---------------------

router.get('/genres', async (req,res)=>{
    const genres = await genreDao.findAllRaw();
    res.render('genres/list', { genres });
});

// ---------------------
// PROGRAMS
// ---------------------

router.get('/programs', async (req,res)=>{
    const programs = await programDao.findAllRaw();
    res.render('programs/list', { programs });
});

router.get('/programs/add', (req,res)=>{
    res.render('programs/add');
});



router.get('/programs/:id', async (req,res)=>{
    const program = await programDao.findByIdRaw(req.params.id);
    res.render('programs/detail', { program });
});

// ---------------------
// 404 handler
// ---------------------
router.use((req,res)=>{
    res.status(404).render('errors/404');
});

module.exports = router;