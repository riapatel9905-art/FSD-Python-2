var eventemitter = require("events");
var ee= new eventemitter();    
ee.on("square",(s)=>{
    if (s<0){console.log("side must be positive")}
    else{console.log(`Perimeter is ${4*s}`)}
})
ee.emit("square",10)
ee.on("calc",(a,b)=>{
    if(a,b<0){console.log("side must be positive")}
    else{console.log(`sum of and ${a} and ${b} is ${a+b}`)}
})
ee.emit("calc",5,10)
ee.on("circle",(r)=>
{
    if(r<0){console.log("side must be positive")}
    else{console.log(`Perimeter is ${2*3.14*r}`)}
})
ee.emit("circle",5)