var fs = require("fs");
//fs.mkdir("Mytask",(e)=>
//{
//    if(e){throw e;}
//    else{console.log("created")}
//})
var a = function(){
fs.writeFile("Mytask/task.txt","Hello",(e)=>
    {
        if(e){throw e;}
        else{console.log("written");}
    });
}
setTimeout(a,1000)
var b= function(){
fs.appendFile("Mytask/task.txt"," Good Morning",(e)=>
{
    if(e)
    {
        console.log("File not found"+e);
        
    }
    else{console.log("appended")}
});
}
setTimeout(b,2000)
c=function()
{
    fs.copyFile("Mytask/task.txt","Mytask/task1.txt",(e)=>
    {
        if(e){throw e;}
        else{console.log("Copied");}
    });
}
setTimeout(c,3000)
d=function()
{
fs.readFile("Mytask/task1.txt","utf-8",(e,data)=>
{
    if(e){throw e;}
    else{console.log(data);}
});
}
setTimeout(d,4000)
e=function()
{
    fs.readFile("Mytask/task.txt","utf-8",(e,data)=>{
        if (e){throw e;}
        else{fs.unlink("Mytask/task.txt",(e)=>
        {
            if (e){throw e;}
            else{console.log("deleted")}
        })}
    })
}
setTimeout(e,5000)
f=function()
{
    fs.rename("Mytask/task1.txt","Mytask/newfile.txt",(e)=>
{
    if(e){throw e;}
    else{console.log("renamed");}
})
}
setTimeout(f,6000)