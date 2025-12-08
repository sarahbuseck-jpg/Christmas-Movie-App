const express = require('express');
const path = require('path');
const axios = require('axios');
const helmet = require('helmet');
const cors = require('cors');

// create app
const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// API routes
const apiRoutes = require('./routes/router');
app.use('/api', apiRoutes);

// ------------------------------
// Axios → Render Actors Page
// ------------------------------
app.get('/actors', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/api/actors');

        res.render('actor/list', {
            actors: response.data
        });

    } catch (err) {
        console.error(err);
        res.status(500).send('Error loading actors');
    }
});

// home
app.get('/', (req,res)=>{
    res.render('home');
});

app.get('/actors/add', (req, res) => {
    res.render('actor/add');
});

app.post('/actors/add', async (req, res) => {
    const { actorName, age, image } = req.body;

    try {
        await axios.post('http://localhost:3000/api/actors', {
            actorName,
            age,
            image
        });

        res.redirect('/actors'); // redirect back to the actors list
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving actor");
    }
});
app.get("/programs", async (req,res)=>{
    try {
        const response = await axios.get("http://localhost:3000/api/programs");

        res.render("program/list", {
            programs: response.data
        });

    } catch(err) {
        console.error(err);
        res.status(500).send("Error loading programs");
    }
});



// 404
app.use((req,res)=>{
    res.status(404).render('errors/404');
});

// start
app.listen(3000, ()=>{
    console.log("Running on http://localhost:3000");
});

