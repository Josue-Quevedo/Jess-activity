import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import {test1} from ""
dotenv.config();

mongoose.connect(process.env.urlbase)
.then(()=>{
    console.log("funciona la conexion")
})
.catch((error)=>{
    console.log("no funciona la conexion ", error)
})

const app=express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha correcto, no escucha borroso")
})

test1()