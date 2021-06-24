const User = require('../models/UserModel');
const asyncHandler = require('express-async-handler');

exports.loginUser = asyncHandler(async (req,res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user && user.password === password){
        res.status(200).json({success: {id: user._id, userName: user.userName, email: user.email }})
    }else{
        res.status(401);
        throw new Error("Email or password not matched")
    }
})

exports.registerUser = asyncHandler(async (req, res) => {
    res.send('test route')
})