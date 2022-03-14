const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    adress:{type:String,required:true},
    gender:{type:String,required:true},
    type:{type:String,default:"customer"},
},
{
    versionKey:false,
    timestamps:true
}
)

module.exports=mongoose.model("userb",userSchema)