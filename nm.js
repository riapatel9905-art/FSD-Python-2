var nm=require("nodemailer");
const { setMaxListeners } = require("nodemailer/lib/xoauth2");
var trans=nm.createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth:{user:"riapatel9905@gmail.com",
          pass:"jzbt ycfw rwvg rfvt",
    }
})
var mailoptions=
{
    from:"riapatel9905@gmail.com",
    to:"naveenaadvani@gmail.com",
    subject:"Node Mailer Example",
    text:"Texting Mail ",
    html:"<h1>Testing done</h1><h3> Thank you Naveena!! </h3>",
    attachments:[{filename:"1.png",path:"./1.png"}]
}
trans.sendMail(mailoptions,(e,d)=>
{
    if(e){console.log(e);}
    else{console.log(d)}
})
