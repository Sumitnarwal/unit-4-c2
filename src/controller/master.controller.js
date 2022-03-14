const express = require("express");
const User = require("../model/master.model");

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const users = await User.find().populate("userId").lean().exec();
        return res.send(users)
    } catch (err) {
        console.log(err.message)
    }
})
router.get("/:id", async (req, res) => {
    try {
        const users = await User.find().populate({path:"userId",select:["accno","balance"]}).lean().exec();
        return res.send(users)
    } catch (err) {
        console.log(err.message)
    }
})
router.post("/", async (req, res) => {
    try {
        const users = await User.create(req.body)
        return res.send(users)
    } catch (err) {
        console.log(err.message)
    }
})

module.exports=router;