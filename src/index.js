const express=require("express");
const app=express();
const connect=require("./configs/db")

app.use(express.json())

const usercontroler=require("./controller/user.controler");
const fixeController=require("./controller/fixed.controller")
const savingController=require("./controller/saving.controoler")
const masterControoler=require("./controller/master.controller")

app.use("/userb",usercontroler)
app.use("/saving",savingController)
app.use("/fixed",fixeController)
app.use("/master",masterControoler)

app.listen(7000, async()=>{
    try{
        await connect();
  console.log("lis 7000")
    }catch(err){
        console.log(err.message);
    }
})