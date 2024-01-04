import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import { userRouter } from "./routes/user.router.js";

const app=express()

app.use(cors({origin:process.env.CORS_ORIGIN}))
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));


// All Routes
app.use('/api/v1/user',userRouter)



export default app