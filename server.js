const express=require ("express");
const app= express();

app. get ("/",function(req,res){
    res.send("<h1>home</h1>");
});
app.get("contact",function(req,res){
    res.send("contact web page")
})

app.listen(10000,function(){
    console.log("server has stared on port 10000")
});