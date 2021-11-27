const noticiaCtrl = {};

noticiaCtrl.getPrueba = (req, res) => {
    res.send('prueba desde el controlador')
};

noticiaCtrl.crearNoticia = (req, res) => {
    console.log(req.body);
    res.send('desde crearNoticiaCtrl');
}

export default noticiaCtrl;