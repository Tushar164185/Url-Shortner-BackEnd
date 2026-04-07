const jsonWebToken = require("jsonwebtoken");
require('dotenv').config({path:"../.env"});
const cookieparser = require("cookie-parser");
const generateToken = async (payLoad)=>{
    const token=await jsonWebToken.sign(payLoad,process.env.JWT_SECRET_KEY,{expiresIn:"10m"});
    return token;
}
async function verifyToken(token){
        const decoded = await jsonWebToken.verify(token,process.env.JWT_SECRET_KEY);
        return decoded;
}
module.exports = {generateToken,verifyToken};