const express=require("express");
var app=express();
const port=4000;
app.get("/",function(req,res){
    res.send("hello");
})
app.get("/123",function(req,res){
    res.send("hello!!World");
})
app.post('/',(req,res)=>{
    res.send("Thankyou for registering");
})
app.put('/',(req,res)=>{
    res.send("Thankyou for Accepting");
})

app.delete('/',(req,res)=>{
    res.send("deleted");
})

app.listen(port,function(req,res){
    console.log(`application running on ${port} number`)
})