var express=require("express")
var app=express(); 
var path=require("path");
var sp=path.join(__dirname,"../frontend")
//app.use(express.static(sp,{index:"1.html"})); /*--when CSS,html,png is in frontend , js in backend*/
/*app.use(express.static(__dirname));--when all the files are in chapter5 folder
app.use(express.static("frontend",{index:"1.html"})); --when CSS,html,png is in frontend*/
app.use(express.static(sp)); //when using res.sendfile
app.get("/",(req,res)=>
{
    res.sendFile(sp+"/1.html") //will load only html file
})
app.listen(7002);
