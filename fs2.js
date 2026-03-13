var fs=require("fs");
//fs.mkdirSync("task");
fs.writeFileSync("task/t1.txt","Hello! good Morning")
fs.appendFileSync("task/t1.txt","\n New data added");
var r= fs.readFileSync("task/t1.txt","utf-8");
fs.writeFileSync("task/t3.txt",r);
//fs.unlinkSync("task/t1.txt")
//fs.unlinkSync("task/1.txt")
//fs.unlinkSync("task/t2.txt")
fs.copyFileSync("task/t1.txt","t4.txt");
fs.renameSync("t4.txt","new.txt")

