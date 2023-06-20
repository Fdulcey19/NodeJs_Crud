import {Schema, model} from 'mongoose'

const UsuariosSchema = new Schema({
    id:{
        type: Number,
        unique: true,
    },
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    phone:{
        type: String,
    },
    city:{
        type: String,
    },
    user:{
        type: String,
    }

},
{
    versionKey:false,

})

export default model("Usuarios", UsuariosSchema)