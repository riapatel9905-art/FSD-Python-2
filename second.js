var express=require("express")
var app=express();
student=[{name:"x", age:20},
      {name:"y", age:10},
      {name:"z",age:15}]
app.get("/sort",(req,res)=>
{
    res.type("text/html");
    var temp=student.sort((a,b)=>b.age-a.age)
    res.write(`<table border="1"><tr><th>Name</th><th>Age</th></tr>`);
    for (t of temp){
        res.write(`<tr><td>${t.name}</td><td>${t.age}</td></tr>`);
    }
    res.write(`</table>`)
    res.send()
})
app.listen(3000,"localhost",100,()=>{console.log("Server Started")})
