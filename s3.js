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
    res.redirect("/fetchdata")
})
app.get("/fetchdata",(req,res)=>
{
    if(req.session.uname==="admin" && req.session.pass==="admin123")
    {
        res.send(`<h1>Welcome ${req.session.uname}</h1><a href="/destroy">Logout</a>`)
    }
    else
    {
        res.send(`<h1>Please enter a valid username and password</h1><a href="/destroy">Logout</a>`)
    }
})
app.get("/destroy",(req,res)=>
{
    req.session.destroy();
    res.send(`<h1>Session destroyed </h1><a href="/">Login</a>`)
})
app.listen(8003)