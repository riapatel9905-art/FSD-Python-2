var path=require("path")
e = require("express")
app = e()
app.use(e.urlencoded())

c = path.join(__dirname,"../CSS")
h = path.join(__dirname,"../HTML")
i = path.join(__dirname,"../images")
app.use(e.static(i))
app.use(e.static(c))
app.use(e.static(h,{index:"one.html"}))

app.post('/data',(req,res)=>{
   res.type("text/html") ;
   res.write(`<h1>welcome ${req.body.un}</h1>`)
   var m=(req.body.mess).split(".");
   for (i of m)
   {
    res.write(i+"<br>");
   }
   res.write(`Click here to count vowel <a href="/message?msg=${req.body.mess}"> View Vowels</a>`)
   res.send()
})
app.get("/message",(req,res)=>{
    var m=req.query.msg;
    var c=0;
    for(i of m.toLowerCase())
    {
        if ("aeiou".includes(i))
        {
            c++;
        }
    }
    res.send(`<h1>Vowels are ${c}</h1>`);
})

app.listen(7001)