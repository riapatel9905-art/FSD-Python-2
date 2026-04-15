var express=require("express")
var app=express();
app.get("/",(req,res)=>
{
    res.send(`<form action="/data" method="post"><input name="un"/>
    <input type="password" name="pass"/>
    <input type="submit"/></form>`);
})
/*app.get("/data",(req,res)=>
{
    res.send(`<h1>Welcome ${req.query.un}!</h1>
    <h2>Your password is ${req.query.pass}</h2>`)
})*/
app.use(express.urlencoded())
app.post("/data",(req,res)=>
{
    res.send(`<h1>welcome ${req.body.un}</h1>
    <h2>Password is ${req.body.pass}</h2>`)
})
app.listen(7002)