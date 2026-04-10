var express=require("express")
var app=express();
/*app.get("/",(req,res)=>{
    /* res.set("content-type","text/plain");
    res.type("text/html");
    res.setHeader("content-type","text/html");
    res.set("content-type","text/html");
    res.write("<h3>Hi!</h3>");
    res.send("<h2>Express Js<h2>");//send will always remain empty or else it will throw error
})
app.listen(3000,"localhost",100,()=>{console.log("Server Started")})*/
/*app.get("/about",(req,res)=>
{
    res.set("content-type","text/html");
    res.send(`<h2 style="color:purple">Express Js<h2>`);
})
app.listen(3000,"localhost",100,()=>{console.log("Server Started")})
/*res.json()->we can use directly for json type data
  res.sendFile()-> for images
  res.render()->renders templete for ejs file
  res.redirect()->redirects to a page
  app.use(express.json)->
  app.use(express.urlencoded())->to submit form from post method
  app.use(cors())->will allow to use the webpages of a website to run  on different ports
  app.use(express.static)->to use static files
  app.get->to match exact path*/

student={
    "name":"test",
    "age":20
  }
app.get("/j1",(req,res)=>
{
    res.send(student);
})
app.get("/j2",(req,res)=>{
    res.json(student);
})
app.get("/j3",(res,req)=>
{
    res.write(JSON.stringify(student.age));
    res.send()
})
app.listen(3000,"localhost",100,()=>{console.log("Server Started")})