import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import express from "express"
import connectDB from "./DB/index.js"
import dotenv from "dotenv"
import {app} from "./app.js"
import cors from "cors"
import cookieParser from "cookie-parse"
dotenv.config()




connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("server is running ||||")
    })
})
.catch((err)=>{
    console.log("mongoDB is not working |||")
})
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(express.cookieParser())
app.use

