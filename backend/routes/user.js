const router = require("express").Router();
const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./userAuth")

// signup
router.post("/sign-up", async (req, res) => {
    try {
        const { username, email, password, address } = req.body;

        // check username is more than 4
        if (username.length < 4) {
            return res.status(400).json({ message: "Username length should be greater than 3" })
        }

        // username already exits 
        const existingUsername = await User.findOne({ username: username });

        if (existingUsername) {
            return res.status(400).json({ message: "Username already exits" })
        }

        // email already exits
        const existingEmail = await User.findOne({ email: email });

        if (existingEmail) {
            return res.status(400).json({ message: "Email already exits" })
        }

        // check passwords
        if (password.length <= 8) {
            return res.status(400).json({ message: "Password length should be greater than 8" })
        }
        const hashPass = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            email: email,
            password: hashPass,
            address: address,
        });

        await newUser.save();
        return res.status(200).json({ message: "SignUp Successfully" })

    } catch (error) {
        res.status(500).json({ message: "Internal  server error" })
    }
})

// signin
router.post("/sign-in", async (req, res) => {
    try {
        const { username, password } = req.body;

        const exitingUser = await User.findOne({username});
        if(!exitingUser){
            res.status(400).json({message: "Invalid Credentials"})
            
        }

        await bcrypt.compare(password, exitingUser.password, (err, data) => {
            if(data){
                const authClaims = [
                    {name: exitingUser.username},
                    {role: exitingUser.role},
                ];
                const token = jwt.sign({authClaims},`${process.env.JWTKEY}`,{expiresIn: "30d"});
                res.status(200).json({id: exitingUser._id, role:exitingUser.role, token: token});
            } else {
                res.status(400).json({message: "Invalid Credentials"});

            }
        })
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
})

// get user info
router.get("/get-user-information", authenticateToken, async(req,res) => {
    try {
        const {id} = req.headers;
        const data = await User.findById(id).select('-password');
        return res.status(200).json(data) 
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
})

// update address
router.put("/update-address", authenticateToken, async(req,res) => {
    try {
        const {id} = req.headers;
        const {address} = req.body;
        await User.findByIdAndUpdate(id, {address: address});
        return res.status(200).json({message: "Address Update Successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
})

module.exports = router;

