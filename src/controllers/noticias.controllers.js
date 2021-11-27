import Noticia from '../models/noticias.models';

const noticiaCtrl = {};

noticiaCtrl.getPrueba = (req, res) => {
    res.send('prueba desde el controlador')
};

noticiaCtrl.crearNoticia = async (req, res) => {
    console.log(req.body);
    try{
        const {tituloNoticia, descripcionBreve, descripcionDetallada, categoria, autor, fecha, imagen} = req.body;
        // Tengo que validar los datos con el mismo if de mi frontend

        // Crear una noticia en la BD
        const nuevaNoticia = new Noticia({
            tituloNoticia,
            descripcionBreve,
            descripcionDetallada,
            categoria,
            autor,
            fecha,
            imagen
        });
        //Guardo la noticia
        await nuevaNoticia.save();
        res.status(201).json({
            mensaje: 'La noticia fue agregada con éxito a la BD'
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'Ocurrio un error al intentar guardar los datos'
        })
    }
}

export default noticiaCtrl;