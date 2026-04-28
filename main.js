var express = require("express")
var app=express();
var api=require("./api")
app.use("/students",api);
app.listen(7008)

//localhost:7008
//localhost:7008/students/id/101
//localhost:7008/students/branch/cse