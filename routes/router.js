const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 3000;

router.get('/api', (req, res) => {
    res.send(`Christmas-Movie-App API is running on port ${PORT}`);

});
         

module.exports = router