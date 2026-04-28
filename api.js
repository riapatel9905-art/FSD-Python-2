var express=require("express")
var router=express.Router();
var obj=[{name:'A',age:18,city:'Ahmedabad',branch:'cse',id:101},
         {name:'B',age:19,city:'Surat',branch:'cst',id:102},
         {name:'C',age:20,city:'Rajkot',branch:'cse',id:103},
         {name:'D',age:18,city:'vadodra',branch:'cse',id:104},
         {name:'E',age:19,city:'Surat',branch:'aiml',id:105},
         {name:'F',age:17,city:'Ahmedabad',branch:'cea',id:106}]
router.get("/",(req,res)=>
{
    res.type("text/html")
    for (o of obj)
    {
        res.write(`<h1>Name: ${o.name} Age: ${o.age} City: ${o.city} Branch: ${o.branch}</h1>`)
    }
    res.send()
})
router.get("/id/:id",(req,res)=>
{
    data=obj.filter(o=>o.id==req.params.id)
    if(data.length>0)
    {
        res.send(data);
    }
    else
    {
        res.send("No data available")
    }
})
router.get("/branch/:branch",(req,res)=>
{
    var data=obj.filter((o)=>o.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(data.length>0)
    {
        res.send(data)
    }
    else{
        res.send("No data available")
    }
})
module.exports=router;