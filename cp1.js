var express=require('express')
var app=express();
var cp=require('cookie-parser');
app.use(cp())
app.get('/',(req,res)=>{
    res.cookie('fname','Test')
    res.cookie('lname','test1')
    res.cookie('Lname','FSD2',{maxAge:5000})
    res.cookie('email',"text@gmail.com",{expires:new Date(Date.now()+10000)})
    res.clearCookie("lname")
    res.send(req.cookies)
})
app.listen(5000)
