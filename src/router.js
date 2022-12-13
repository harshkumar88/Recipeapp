const express = require('express');
const router = express();
const bp = require("body-parser");
const validator = require('validator');
router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));
require("./database.js");
const { Register } = require("./collections.js")

router.post("/registerData", async (req, res) => {
    const { username, email, password, confirmpass } = req.body;
    if (username !== "" && email !== "" && password !== "" && confirmpass !== "") {

        try {
            if (!validator.isEmail(email)) {
                return res.status(422).json({ error: "emailrejected" });
            }
            if (!validator.isStrongPassword(password)) {
                return res.status(422).json({ error: "passwordrejected" });
            }

            const userdata = await Register.find({})
            const finduser = userdata.find((user) => {
                return user.email === req.body.email
            })

            if(finduser){
                return res.status(422).json({error:"UserExist"});
            }

            const register = new Register({
                username,email,password,confirmpass
            })
            console.log(register)
            await register.save();
            return res.status(201).json({ message: 'Sucess' })
        }
        catch (e) {
            res.json(e);
        }

    }

    else {
        return res.status(422).json("");
    }
})

router.post("/LoginData", async (req, res) => {
    const { username, email, password } = req.body;

    if (username !== "" && email !== "" && password !== "") {
        return res.status(200).json("successfull")
    }

    else {
        return res.status(422).json("");
    }
})

module.exports = router;