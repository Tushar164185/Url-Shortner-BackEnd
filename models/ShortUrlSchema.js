const mongoose = require('mongoose');
const shortUrlSchema = new mongoose.Schema({
    full:{
        type:String,
        required:true,
    },
    short:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    Click:{
        type:Number,
        required:true,
        default:0
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});
module.exports = mongoose.model("ShortUrl",shortUrlSchema);           