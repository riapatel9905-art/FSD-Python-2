//Event Module
const eventemitter=require("events");
const ee= new eventemitter();
ee.on("first",()=>{            //ee.on(event,arguements)
    console.log("First Event");
});
ee.emit("first");             //ee.emit(event,listner)
ee.on("Second",(a,b)=>{
    console.log(`Multiplication is: ${a * b}`);
})
ee.emit("Second",5,10);
ee.on("write",()=>{
    console.log("written");
    ee.emit("append");
})
ee.on("append",()=>{
    console.log("appended")
})
ee.emit("write");
console.log("Thank you!");