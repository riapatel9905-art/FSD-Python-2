var express=require("express");
var app=express();
var cp =require("cookie-parser");
app.use(cp());
app.get("/",(req,res)=>{
    res.cookie("Fname","Test");
    res.cookie("lname","XYZ");
    res.cookie("subject","FSD2",{maxAge:5000});
    res.send(req.cookies);
    
})
app.listen(3009);
/*browser->localhost:3009-->inspect-->application(arrow)-->gives the cookies*/