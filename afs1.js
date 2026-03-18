var fs=require("fs");
fs.writeFileSync("temp.txt","Good Morning!");
fs.writeFileSync("temp1.txt","Hi",(e)=>{    //or function(e){}     //callback function
    if(e){throw e;}
    else{console.log("Async task completed");
}
})
//fs.mkdir("afs1",(e)=>{
 //   if(e){throw e;}
 //   else{console.log("created")}
//})
fs.writeFile("afs1/t1.txt","hi",(e)=>
{
    if(e){throw e;}
    else{console.log("written");}
});
fs.appendFile("afs1/t1.txt","Hello",(e)=>
{
    if(e)
    {
        console.log("File not found"+e);
        
    }
    else{console.log("appended")}
});
fs.readFile("afs1/t1.txt","utf-8",(e,data)=>{
    if (e){throw e;}
    else{fs.unlink("afs1/t1.txt",(e)=>
    {
        if (e){throw e;}
        else{console.log("deleted")}
    })}
})
fs.rename("temp.txt","newfile.txt",(e)=>
{
    if(e){throw e;}
    else{console.log("renamed");}
})
fs.copyFile("newfile.txt","myfile.txt",(e)=>
{
    if(e)
    {throw e;}
    else{console.log("copied")}
})
console.log()