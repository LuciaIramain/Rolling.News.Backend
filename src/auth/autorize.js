import Usuario from "../models/usuarios.models";
import jwt from 'jsonwebtoken';

const autorize = async (req, res, next) => {
    console.log('entre al middle autorize')
    try {
        const token = req.header('authorization').replace('Bearer ', '');
        const verificarToken = jwt.verify(token, process.env.SECRETA);
        console.log('verificar', verificarToken);
        const usuario = await Usuario.findOne({_id: verificarToken.usuario.id, token})
        console.log('usuario', usuario);
        if(!usuario) {
            res.status(401).json({
                mensaje: 'No autorizado'
            });
        }
        res.locals.user = usuario;
        res.locals.token = token;
        
        next();
    } catch(error){
        res.status(500).send(error);
    }
};

export default autorize;
