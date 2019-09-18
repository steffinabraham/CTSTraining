const Employee=require('../models/employee')
module.exports=function(router){
    router.get('/employee',function(req,res){
        res.send('Hello hi')
    })
    router.post('/employee',function(req,res){
        let note=new Employee(req.body)
        note.save(function(err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })
}