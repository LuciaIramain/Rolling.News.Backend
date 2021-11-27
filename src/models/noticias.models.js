import mongoose, {Schema} from 'mongoose';

const noticiaSchema = new Schema({
    tituloNoticia:{
        type: String,
        maxlenght: 500,
        required: true,
        unique: true
    },
    descripcionBreve:{
        type: String,
        maxlenght: 500,
        required: true,
        unique: true
    },
    descripcionDetallada:{
        type: String,
        minlength: 2000,
        maxlenght: 10000,
        required: true,
        unique: true
    },
    categoria:{
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
});

const Noticia = mongoose.model('noticia', noticiaSchema);

export default Noticia;