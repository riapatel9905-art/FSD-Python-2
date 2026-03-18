const fs=require("fs");
const p=require("path");
var ps="LJ/sample.txt";
var bn = p.basename(ps);
var dn = p.dirname(ps);
var newpath=dn+"/"+bn;
/*fs.mkdir(dn,(e)=>{
    if(e){throw e;}
    else{console.log("Folder created");}
})*/
fs.writeFile(newpath,"Hello",(e)=>{
    if(e){throw e;}
    else{fs.copyFile(newpath,dn+"/temp.txt",(e)=>
    {
        if(e){throw e;}
        else{fs.unlink(newpath,(e)=>{
            if(e){throw e;}
                else{console.log("task completed")}
        }
            )}
    })}

})
