 const ShortUrl = require('../models/ShortUrlSchema.js');
 module.exports.async = async function(short,fullurl,userId){
    try{
    const newUrl = new ShortUrl({
        full:fullurl,
        short:short,
    });
    if(userId) newUrl.User = userId;
    await newUrl.save();
    return newUrl.short;
}catch(err)
 {console.error(err.message);}}
 module.exports.findUrl = async function(id){
    try{
        const full = await ShortUrl.findOneAndUpdate({short:id},{$inc:{Click:1}});
        return full.full;
    }catch(err){
        console.error(err.message);
        res.status(500).json({message:"Server error"});
    }
 }