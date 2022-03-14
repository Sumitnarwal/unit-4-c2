
const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb://localhost:27017/web15")
}
module.exports=connect;