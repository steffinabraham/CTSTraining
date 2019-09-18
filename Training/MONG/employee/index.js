const express=require('express')
const router=express.Router()
require('./routes/employee')(router)
module.exports=router