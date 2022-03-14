const mongoose=require("mongoose");
const masterModel = require("./master.model");

const fixedSchema=new mongoose.Schema({
    accNo:{type:Number,required:true},
    balance:{type:mongoose.Schema.Types.ObjectId,ref:"master",required:true},
    intrRate:{type:Number,required:true},
    startDate:{type:Date,required:true},
    maturdate:{type:Date,required:true},
  
},
{
    versionKey:false,
    timestamps:true
}
)

module.exports=mongoose.model("fixedacc",fixedSchema)