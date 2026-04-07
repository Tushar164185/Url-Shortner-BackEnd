const {verifyToken} = require("../services/token.js");
const cookieparser = require("cookie-parser");
const authenticate = (req,res,next)=>{
    const token = req.cookies.accesstoken;
    if(token===undefined) return res.status(401).send("Unauthorized");
    next();
}
const decode = async(req,res,next)=>{
    const token = req.cookies.accesstoken;
    const decoded = await verifyToken(token);
    req.user_id=decoded.id;
    next();
}
module.exports = {authenticate,decode};