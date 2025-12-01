const express = require('express');
const router = express.Router();

const PORT = process.env.PORT || 3000;

router.get('/', (req, res) => {
 // res.send('christmasdb25');
res.json({
   'All Actors': `http://localhost:${PORT}/api/actors`,
   
 })
})

router.use((req, res, next)=> {
    res.status(404)
    .send('<h1>404 Error this page does not exist')
})



module.exports = router;
