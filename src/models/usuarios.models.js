import mongoose, {Schema} from 'mongoose';

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now()
    },
    token: [String]
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;