const express = require("express");
const Saving = require("../model/savinf.model");

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const users = await Saving.find().lean().exec();
        return res.send(users)
    } catch (err) {
        console.log(err.message)
    }
})
router.post("/", async (req, res) => {
    try {
        const users = await Saving.create(req.body)
        return res.send(users)
    } catch (err) {
        console.log(err.message)
    }
})

module.exports=router;