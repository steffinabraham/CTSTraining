const express = require('express');
const server = express();
server.get('/',(req,res)=>{
    res.send('hello express');
});
server.listen(8000,()=>{
    console.log("server is running....");
});