import mongoose, {Schema} from 'mongoose';

const noticiaSchema = new Schema({
    tituloNoticia:{
        type: String,
        maxlenght: 500
    },
    descripcionBreve:{
        type: String,
        maxlenght: 500
    },
    descripcionDetallada:{
        type: String,
        maxlenght: 10000
    },
    categoria:{
        type: String
    },
    autor: {
        type: String
    },
    fecha: {
        type: Date
    },
    imagen: {
        type: String
    },
    destacada: {
        type: String
    }
});

const Noticia = mongoose.model('noticia', noticiaSchema);

export default Noticia;