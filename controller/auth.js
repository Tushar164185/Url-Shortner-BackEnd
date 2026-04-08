const {register,login} = require("../services/register.user.js");
const {cookieOptions} = require("../utili/cookieoptions.js");
const registerUser = async (req,res)=>{
    const {username,password,email} = req.body;
    const a = await register(username,email,password);
    res.cookie("accesstoken",a,cookieOptions);
    return res.send("User registered successfully");
}
const loginUser = async (req,res)=>{
    const {password,email} = req.body;
    const a = await login(email,password);
    res.cookie("accesstoken",a,cookieOptions);
    return res.send("User logged in successfully");
}
module.exports = {registerUser,loginUser};