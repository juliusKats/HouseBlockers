import express from 'express'
import dotenv from 'dotenv'
// import mangoose from 'mangoose'
const app = express();
const port = 3000;
app.listen(port,()=>{
console.log("server running on port " +port )
});