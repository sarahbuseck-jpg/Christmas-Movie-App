const express = require('express');
const router = express.Router();
const actorDao = require('../../daos/api/actorDao');

// SEARCH
router.get('/search', async (req,res)=>{
    await actorDao.search(req,res);
});

// SORT
router.get('/sort/:column', async (req,res)=>{
    await actorDao.sort(res, req.params.column);
});

// ACTOR + MOVIES
router.get('/:id/movies', async (req,res)=>{
    await actorDao.findActorMovies(res, req.params.id);
});

// CREATE ACTOR
router.post('/', async (req,res)=>{
    try {
        const newActor = await actorDao.create(req.body);
        res.status(201).json(newActor);
    } catch(err){
        res.status(500).json({error:err.message});
    }
});

// GET ONE ACTOR
router.get('/:id', async (req,res)=>{
    await actorDao.findById(res, req.params.id);
});

// GET ALL ACTORS (JSON)
router.get('/', async (req,res)=>{
    await actorDao.findAll(res);
});

// OPTIONAL HTML LIST (last!)
router.get('/html/list', async (req,res)=>{
    try {
        const actors = await actorDao.findAllRaw();

        const html = actors.map(a => `
            <div>
                <h3>${a.first_name} ${a.last_name}</h3>
                <img src="/images/${a.img_url}" width="150">
            </div>
        `).join('');

        res.send(html);

    } catch(err){
        res.status(500).send("Server Error");
    }
});
<img src="<%= actor.img_url %>" class="img-fluid rounded" alt="actor"></img>
module.exports = router;