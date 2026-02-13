import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import express from "express"
import connectDB from "./DB/index.js"
import dotenv from "dotenv"

dotenv.config({
    path:"./env"
})

// const app=express()


connectDB();

