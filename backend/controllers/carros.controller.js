import { ModeloCarro } from "../models/carros.model.js";

ModeloCarro.create({
    marca:"Nissan",
    color:"rojo",
    modelo:"GT-R"
})

export const test1 = ()=>{
    console.log("Funciona el controlador")
}