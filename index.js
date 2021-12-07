var express = require('express')
var app = express()
var path = require('path')
//app.get('/',function(req,res){
    //res.sendFile('register.html',{root:path.join(__dirname,'./assets')});
    //res.send("hello from server")
//})

app.post('/',function(req,res){
    res.send("from post api")
})
app.listen(3010,function(error){
    if(error)
    console.log(error);
    console.log("Server is running at 3005");
    console.log("Mansi");
})