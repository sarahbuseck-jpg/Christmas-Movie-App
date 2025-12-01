const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('christmasdb25 api');
});

module.exports = router;
