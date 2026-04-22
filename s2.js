var express=require('express')
var app=express();
const sess=require("express-session");
app.use(sess({secret:"RSP",cookie:{maxAge:15000},name:"Login"}))
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"s2.html"}))
app.post("/savesession",(req,res)=>
{
    req.session.uname=req.body.uname;
    req.session.pass=req.body.pass;
    res.redirect("/fetchsession")
})
app.get("/fetchsession",(req,res)=>
{
    res.send(`<h1>Welcome ${req.session.uname}</h1><a href="/deletesession">Logout</a>`)
})
app.get("/deletesession",(req,res)=>
{
    req.session.destroy((e)=>
    {
        if(e){res.send(e)}
        else{res.clearCookie("Login");
    res.send("Destroyeddddd")}
    })
})
app.listen(8006)