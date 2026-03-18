const fs=require("fs");
const shape={'d':{'a':10,'b':20,'c':[30,50]}};
fs.writeFileSync('shape.txt',JSON.stringify(shape));
var r=fs.readFileSync('shape.txt','utf-8');
var s=JSON.parse(r);
var add=s.d.a +s.d.b;
var sub=s.d.c[1]-s.d.b;
var mul=s.d.c[0]*s.d.c[1];
fs.appendFileSync("shape.txt",`\n Addition is: ${add}
                               \n Subtraction is: ${sub}
                               \n Multiplication is: ${mul}`);