import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express();
const port = 3000;
dotenv.config()
app.use(express.json())
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to MongoDB");
})
.catch((error)=>{
    console.log(error)
})
app.listen(port,()=>{
console.log("server running on port " +port )
});