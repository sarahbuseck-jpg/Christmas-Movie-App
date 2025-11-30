const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


//http://localhost:3000/
app.get('/', (req, res) => {
    res.end('My Christmas Movie App!')
})

const PORT = process.env.PORT || 3000;

//http://localhost:3000/programs
app.get('/programs',(req, res) => {
    
    
const url = 'http://localhost:3000/programs';

fetch(url)
    .then(response => console.log(res))


app.listen(PORT, () => console.log('Server is running at http://localhost:' + PORT));