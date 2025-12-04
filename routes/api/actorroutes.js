const express = require('express');
const router = express.Router();

const dao = require('../../daos/common/daoCommon');

// Set the table to 'actor' for this router
const tableName = 'actor';

router.get('/', (req, res) => {
    dao.findAll(req, res, tableName);
});


router.get('/:id', (req, res)=> {
   dao.findById(res, tableName, req.params.id);
})


module.exports = router;