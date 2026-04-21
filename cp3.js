var express=require('express')
var app=express();
var cp=require('cookie-parser');
app.use(cp())
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:"cp3.html"}))
app.post("/submit",(req,res)=>
{
    var {uname,eid,msg,rating}=req.body
    var feedback={uname,eid,msg,rating}
    res.cookie("feedback",feedback,{maxAge:10000})
    res.send(`<h1>Thank you</h1>
    <a href="/view">view feedback</a>`)
})
app.get("/view",(req,res)=>
{
    var fb=req.cookies.feedback;
    if(fb)
    {
        res.send(`<h1>Thank you! ${fb.uname}</h1>
        <h2>your message: ${fb.msg}</h2>
        <h2>your Rating: ${fb.rating}</h2>
        <a href="/">logout</a>`)
    }
    else
    {
        res.send(`<h1>No FeedBack available</h1>
        <a href="/">Logout</a>`)
    }
})
app.listen(8009)