const express = require('express')
const router = express.Router()

const dao = require('../../daos/common/daoCommon')
const { actorDao: dao } = require ('../../daos/dao')

    router.get('/',( req, res)=>{
 dao.findAll(req,res,dao.table)
    })

console.log("actorRoutes.js loaded");

    module.exports = router;