require('dotenv').config({path:"../.env"});
const{ generateShortUrl } = require("../services/generateshorturl.js");
const {findUrl} = require("../doa/shorturl.js");
module.exports.shorturlController = async (req,res)=>{
    const {longUrl} = req.body;
    //console.log(req.user_id);
    const shorturl = await generateShortUrl(longUrl,req.user_id);
    //console.log(shorturl);
    res.send(process.env.web_api + '/' + shorturl);
}
module.exports.redirectShortUrl=async(req,res)=>{
    const id=req.params.id;
    const full = await findUrl(id);
    res.redirect(full);
}