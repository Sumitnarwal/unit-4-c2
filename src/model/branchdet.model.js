const mongoose=require("mongoose");

const branchSchema=new mongoose.Schema({
    name:{type:String,required:true},
    adress:{type:String,required:true},
    IFSC:{type:Number,required:true},
    MICR:{type:Number,required:true},
   
},
{
    versionKey:false,
    timestamps:true
}
)

module.exports=mongoose.model("branch",branchSchema)