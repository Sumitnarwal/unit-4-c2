const express = require("express");
const User = require("../model/fixedacc.model");

const router = express.Router();



router.post("/", async (req, res) => {
    try {
        const users = await User.create(req.body)
        return res.send(users)
    } catch (err) {
        console.log(err.message)
    }
})

module.exports=router;