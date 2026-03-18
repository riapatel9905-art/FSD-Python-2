//Asynchronus File system(AFS)
var fs=require("fs");
fs.writeFileSync("temp.txt","Good Morning!");
console.log("Sync Operation done");
fs.writeFileSync("temp1.txt","Hi",(e)=>{    //or function(e){}     //callback function
    if(e){throw e;}
    else{console.log("Async task completed")
}
});
console.log("last line");