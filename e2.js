var eventemitter=require("events"); 
var ee=new eventemitter();    
var fun1=(m)=>{console.log(`message from fun1 ${m}`);}
var fun2=(m)=>{console.log(`message from fun2 ${m}`);}
ee.on("e1",fun1);
ee.on("e1",fun2);
ee.on("e1",()=> {console.log("another function");})
ee.on("e2",fun1);
ee.on("e2",fun2);
var c=ee.listenerCount("e1")
console.log(`count is ${c}`)
ee.emit("e1","Event task");
ee.emit("e2","Welcome Student!");
ee.removeListener("e1",fun1);
ee.removeAllListeners("e1");