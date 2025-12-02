const express = require('express')
const router = express.Router()

const dao = require('../../daos/common/daoCommon')


    router.get('/',( req, res)=>{
 dao.findAll(req,res,dao.table)
    })


    module.exports = router;