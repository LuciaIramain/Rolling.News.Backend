import Usuario from "../models/usuarios.models";
import bcryptjs from 'bcryptjs';
import { validationResult } from "express-validator";
import jwt from 'jsonwebtoken';

const usuariosCtrl = {};

usuariosCtrl.crearUsuario = async (req, res) => {
    // Revisar los errores
    // const errores = validationResult(req);
    // if(!errores.isEmpty()) {
    //     return res.status(404).json({
    //         errores: errores.array()
    //     });
    // }

    // Extraer email y password
    const {nombre, email, password} = req.body;

    console.log(req.body);
    try {
        // Revisar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({ email });

        if(usuario) {
            return res.status(404).json({
                mensaje: 'El usuario ya existe'
            })
        }

        const nuevoUsuario = {
            nombre,
            email,
            token: []
        }
    
        // Encriptar el usuario
        const salt = await bcryptjs.genSalt(10);
        nuevoUsuario.password = await bcryptjs.hash(password, salt);

        // Crear usuario
        usuario = new Usuario(nuevoUsuario);

        // Guardar usuario
        await usuario.save();
        res.status(201).json({
            mensaje: 'Se creo el usuario'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'Ocurrio un error al crear el usuario'
        });
    }
}

export default usuariosCtrl;