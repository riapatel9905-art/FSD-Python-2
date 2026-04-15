var express=require("express")
var app=express();
app.get("/user/:uid/branch/:b",(req,res)=>
{
    res.write(JSON.stringify(req.params));
    res.write(JSON.stringify(req.query));
    res.send();
    /*res.send(req.params);*/
})
app.listen(7007)
/*http://localhost:7007/user/101/branch/cse --on the browser
 {"uid":"101","b":"cse"} -- output*/

 /*http://localhost:7007/user/101/branch/cse?sub=fsd2&marks=20
 {"uid":"101","b":"cse"}{"sub":"fsd2","marks":"20"}--output*/