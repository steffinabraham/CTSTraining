const mongoose=require('mongoose')
const employeeSchema=new mongoose.Schema({
    name:{type:String},
    empid: {type:Number},
    phoneNumber:{type:Number},
    address:{type:String},
    impediment:{type:String},
    createdOn:{type:Date,default:Date.now}

})
module.exports=mongoose.model('Employee',employeeSchema) 