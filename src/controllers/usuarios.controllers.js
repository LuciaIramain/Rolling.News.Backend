import Usuario from "../models/usuarios.models";
import bcryptjs from 'bcryptjs';
import { validationResult } from "express-validator";
import jwt from 'jsonwebtoken';

const usuariosCtrl = {};

usuariosCtrl.crearUsuario = async (req, res) => {
    // Revisar los errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(404).json({
            errores: errores.array()
        });
    }

    // Extraer email y password
    const {email, password} = req.body;

    console.log(req.body);
    try {
        // Revisar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({ email });

        if(usuario) {
            return res.status(404).json({
                mensaje: 'El usuario ya existe'
            })
        }
        
        // Crea el nuevo usuario
        usuario = new Usuario(req.body);

        // Encriptar el usuario
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        // Guardar usuario
        await usuario.save();

        // Crear y firmar el JWT
        const payload = {
            usuario:{
                id: usuario.id
            }
        }

        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 //1HORA
        }, (error, token) => {
            if(error) throw error;

            res.json({
                token
            });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'Ocurrio un error al crear el usuario'
        });
    }
}

export default usuariosCtrl;