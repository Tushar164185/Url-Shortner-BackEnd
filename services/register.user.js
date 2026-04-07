const User = require("../models/userSchema.js");
const { generateToken } = require("./token.js"); 
const register = async(username,email,password)=>{
    const user = await User.findOne({email:email});
    if(user) throw new Error("User already exists");
    const newUser = new User({username:username,email:email,password:password});
    await newUser.save();
    const token = await generateToken({id:newUser._id});
    return token;
}
const login=async(email,password)=>{
    const user=await User.findOne({email:email});
    if(!user) throw new Error("User not found");
    if(!user||user.password!==password) throw new Error("Invalid credentials");
    const token = await generateToken({id:user._id});
    return token;
}
module.exports = {register,login};