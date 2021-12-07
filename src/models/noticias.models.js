import mongoose, {Schema} from 'mongoose';

const noticiaSchema = new Schema({
    tituloNoticia:{
        type: String,
        maxlenght: 500,
        unique: true
    },
    descripcionBreve:{
        type: String,
        maxlenght: 500,
        unique: true
    },
    descripcionDetallada:{
        type: String,
        minlength: 500,
        maxlenght: 10000,
        unique: true
    },
    categoria:{
        type: String,
    },
    autor: {
        type: String,
    },
    fecha: {
        type: Date,
    },
    imagen: {
        type: String,
    },
    destacada: {
        type: String
    }
});

const Noticia = mongoose.model('noticia', noticiaSchema);

export default Noticia;