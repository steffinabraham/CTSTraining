const express = require('express')
const app = express()
const employee = require('./employee')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.set('port',(process.env.PORT)||8091)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use('/employee',employee)
app.use(express.static('static'))
app.use(morgan('div'))
app.use(function(req,res){
    const err=new Error('not found')
    err.status=404
    res.json(err)
})
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/virtualstandups',{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',console.error.bind(console,'connection-error'))
db.once('open',function(){
    console.log('connected to MongoDB')
app.listen(app.get('port'),function(){
    console.log('Api server listening on port'+app.get('port')+'!')
})
})
