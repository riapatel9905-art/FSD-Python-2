function test(name,callback)
{
    console.log("first execution"+ name);
    callback();
}
function last()
{
    console.log("last execution");
}
test("Node Js",last);
const msg=function()
{
    console.log("hi");
}
setTimeout(msg,3000);//will run after 3s