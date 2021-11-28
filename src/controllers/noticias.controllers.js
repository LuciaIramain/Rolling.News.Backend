import Noticia from '../models/noticias.models';

const noticiaCtrl = {};

noticiaCtrl.listarNoticias = async (req, res) => {
    try{
        const listaNoticias = await Noticia.find(); 
        res.status(200).json(listaNoticias);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'Ocurrio un error al obtener la lista de noticias'
        })
    }
};

noticiaCtrl.crearNoticia = async (req, res) => {
    console.log(req.body);
    try{
        const {tituloNoticia, descripcionBreve, descripcionDetallada, categoria, autor, fecha, imagen, destacada} = req.body;
        // Tengo que validar los datos con el mismo if de mi frontend

        // Crear una noticia en la BD
        const nuevaNoticia = new Noticia({
            tituloNoticia,
            descripcionBreve,
            descripcionDetallada,
            categoria,
            autor,
            fecha,
            imagen,
            destacada
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
        });
    }
}

noticiaCtrl.eliminarNoticia = async (req, res) => {
    try{
        await Noticia.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La noticia fue eliminada'
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: 'Ocurrio un error al intentar eliminar la noticia'
        });
    }
}

noticiaCtrl.obtenerNoticia = async (req, res) => {
    try{
        const noticiaSolicitada = await Noticia.findById(req.params.id);
        res.status(200).json(noticiaSolicitada);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'La noticia solicitada no fue encontrada'
        });
    }
}

noticiaCtrl.editarNoticia = async (req, res) => {
    try{
        if (req.body.tituloNoticia === '' 
        && req.body.descripcionBreve === '' 
        && req.body.descripcionDetallada === '' 
        && req.body.categoria === '' 
        && req.body.autor === '' 
        && req.body.imagen === '' 
        && req.body.fecha === '') {
            res.status(500).json({
                mensaje: 'Todos los campos son obligatorios'
            });
        } else {
            await Noticia.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                mensaje: 'Su noticia fue modificada'
            });
        }  
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: 'Ocurrio un error al intentar editar la noticia'
        });
    }
}

export default noticiaCtrl;