var express=require('express')
var app=express();
app.use(express.urlencoded());
app.use(express.static(__dirname,{index:"s4.html"}))
var mwdata=(req,res,next)=>{
    res.type("text/html")
    res.write(`<h1> ${req.body.uname}</h1><h2>Email is ${req.body.eid}<h2>`)
    next();
}
app.post("/login",mwdata,(req,res)=>{

    if(req.body.subscribe==="on")
    {
        res.write(`<h3>Thank you for your subscription</h3> <a href="/">Logout</a>`)
    }
    else
    {
        res.write(`<h1>You can Subscribe</h1> <a href="/subscribe">Subscribe</a>`)
    }
    res.send()
})
app.get("/subscribe",(req,res)=>
{
        res.send(`<h1>Thank you for your subscription</h1> <a href="/">Logout</a>`)
})
app.listen(8005)