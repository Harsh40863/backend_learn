import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import express from "express"
import connectDB from "./DB/index.js"
import dotenv from "dotenv"
import { app } from "./app.js"
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config()

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// DB + Server start
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`SERVER RUNNING ON PORT ${process.env.PORT || 8000} ✅`);
    })
})
.catch((err) => {
    console.log("mongoDB is not working |||", err)
})
