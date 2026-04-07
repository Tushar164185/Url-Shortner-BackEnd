const {register,login} = require("../services/register.user.js");
const {cookieOptions} = require("../utili/cookieoptions.js");
const registerUser = async (req,res)=>{
    const {username,password,email} = req.body;
    const a = await register(username,email,password);
    res.cookie("accesstoken",a,cookieOptions);
    res.send(a);
}
const loginUser = async (req,res)=>{
    const {password,email} = req.body;
    const a = await login(email,password);
    res.cookie("accesstoken",a,cookieOptions);
    res.send(a);
}
module.exports = {registerUser,loginUser};