const expr=require ("express");
const app = expr();
const mg=require ("mongoose");
const cors=require("cors");
app.use(cors());
app.use(expr.json());

mg.connect("mongodb://127.0.0.1:27017/mdb6");

const myschema = new mg.Schema({username:String,message:String});

const mymodel = new mg.model("reactdata",myschema);

app.post("/signup",async(req,res)=>{
    try{
        const{username,message}=req.body;
        const data=new mymodel({username,message})
        await data.save()
        res.send("Thank You")
    }
    catch(e){
        console.log(e)
    }
})
app.listen(5000)
