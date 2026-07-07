const mg=require("mongoose")
const validator =require("validator");
mg.connect("mongodb://127.0.0.1:27017/mdb6");
const myschema=new mg.Schema({cousre:String,category:String,fees:Number,instructor:String,active:Boolean,
duration:Number,mode:{type:String,}})
const mymodel=new mg.model("courses",myschema)

const myfun=async()=>
{
    // const c=[{course:"mern",category:"web development",fees:25000,instructor:"ABC",active:true,duration:3,mode:"offline"},
    // {course:"python",category:"Programming",fees:18000,instructor:"xyz",active:true,duration:3,mode:"online"},
    // {course:"Data science",category:"data analysis",fees:28000,instructor:"pqr",active:false,duration:4,mode:"offline"},
    // {course:"ml",category:"ai",fees:30000,instructor:"def",active:true,duration:6,mode:"offline"},
    // {course:"ux/ui",category:"Design",fees:25000,instructor:"mno",active:false,duration:4,mode:"online"}]
    // const result=await mymodel.insertMany(c);
    // console.log(result);
    // const t1=await mymodel.findOne({instructor:"mno"})
    // console.log(t1._id);
    // const t2 = await mymodel.findByIdAndUpdate(t1._id,{$set:{duration:7,fees:19000}},{new:true})
    // console.log(t2)
    // const t3=await mymodel.findByIdAndDelete(t1._id)
    // console.log("Deleted",t3)
    //Display name,fees,duration,and mode of the course having 2nd highest fees
    const t4=await mymodel.find({},{category:0,active:0,instructor:0,_id:0}).sort({fees:-1}).limit(1).skip(1)
    console.log(t4)
    //update fees to 2200,duration to 3 months,mode=offline for course named "cloud computing".if mo such course available
    //then insert the new document
    const t5=await mymodel.updateOne({course:"Cloud computing"},{$set:{fees:22000,duration:3,mode:"Online"}},{upsert:true})
    console.log(t5)
    const t6=await mymodel.find({fees:{$lt:25000},mode:"offline"})
    console.log(t6)
    const t7=await mymodel.find({$and:[{active:true},{duration:{$gte:3}}],$nor:[{mode:"online"}]})
    console.log(t7)
    const t8=await mymodel.countDocuments({active:true,mode:"online"})
    console.log(t8)
}   
myfun();
