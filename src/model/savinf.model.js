const mongoose=require("mongoose");

const savingSchema=new mongoose.Schema({
    accNo:{type:Number,required:true},
    balance:{type:mongoose.Schema.Types.ObjectId,ref:"master",required:true},
    intrestrate:{type:Number,required:true},
   
},
{
    versionKey:false,
    timestamps:true
}
)

module.exports=mongoose.model("saving",savingSchema)