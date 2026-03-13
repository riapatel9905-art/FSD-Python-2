//File System Module(fs)
var fs=require("fs");
fs.writeFileSync("b6.txt","Welcome Students!");//creates a file
//fs.mkdirSync("myfolder"); //create folder
//fs.rmdirSync("myfolder");//remove folder
var r=fs.readFileSync("b6.txt");//read file
console.log(r.toString());//converts buffer data into string format
fs.appendFileSync("b6.txt","\n Node js File system");
var r1=fs.readFileSync("b6.txt","utf-8");//utf-8--gives the output in the same format as the input
console.log(r1);
fs.unlinkSync("b6.txt");
console.log("task completed");
