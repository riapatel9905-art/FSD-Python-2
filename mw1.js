var express=require("express")
var app=express(); 
app.use(express.urlencoded())
var first=(req,res,next)=>
{
    console.log("first middleware");
    next();
}
var Second=(req,res,next)=>
{
    console.log("Second middleware");
    next();
}
app.use("/",first,Second);
app.get("/",(req,res)=>{
 res.send("Home Page") 
})
app.get("/about",(req,res)=>{
    res.send("About Page") 
   })
app.listen(3009)