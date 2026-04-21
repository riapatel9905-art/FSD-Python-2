var express=require('express')
var app=express();
const sess=require("express-session");
app.use(sess({secret:"LJU123",resave:false,saveUninitialized:false}))
app.get("/",(req,res)=>
{
    if(req.session.page_views)
    {
        req.session.page_views++;
        res.send(`<h1>You have visited ${req.session.page_views} times</h1>`)
    }
    else
    {
        req.session.page_views=1;
        res.send(`<h1>Welcome to my website</h1>`)
    }
})
app.listen(5007)