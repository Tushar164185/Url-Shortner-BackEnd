const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const connectDB=require('./mongoose.js');
require('dotenv').config({path:"./.env"});
const shorturlroutes=require("./routes/shorturl.routes.js");
const { redirectShortUrl } = require('./controller/shorturl.js');
const authroutes=require("./routes/auth.routes.js");
const port = 8080;
const cors = require('cors');
const cookieparser=require('cookie-parser');
app.use(cookieparser());
//console.log(process.env.FRONTEND_URL),
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.listen(port,()=>{
    connectDB();
    console.log("Hello World");
});
app.get("/:id",redirectShortUrl);
app.use("/shorten",shorturlroutes);
app.use("/auth",authroutes);