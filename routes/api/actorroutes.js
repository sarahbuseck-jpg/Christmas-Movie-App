const express = require('express')
const router = express.Router()

const { actorDao: dao } = require ('../../daos/dao')

    router.get('/',( req, res)=>{
 dao.findALL(req,res,dao.table)
    })

    module.export = router