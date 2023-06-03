const router = require("express").Router();
const User = require("../modules/user");

//RESGISTER
router.post("/register", async (req,res)=>{
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,s)
        console.log(req.body)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        const user = await newUser.save();
        return res.status(200).json(user);

    } catch(err){
        console.log(err)
        res.status(500).json(err);
    }
});

//LOGIN
module.exports = router
