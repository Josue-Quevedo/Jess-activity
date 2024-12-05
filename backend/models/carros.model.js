import{Schema, model} from "mongoose";

const EschemasCarro = new Schema({
    marca:{
        type:String
    },
    color:{
        type:String
    },
    modelo:{
        type:String
    }
})
export const ModeloCarro = new model("Tabla de Carros", EschemasCarro)