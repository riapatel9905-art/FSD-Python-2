var p= require("path");
var addr="D:/LJU/node/my.html";
/*var bn=p.basename(addr);
var dn=p.dirname(addr);
var en=p.extname(addr);
console.log(`Base name is ${bn},Directory is ${dn}, Extension is ${en}`)*/
var ps=p.parse(addr);
console.log(ps)