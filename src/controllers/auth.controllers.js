import Usuario from "../models/usuarios.models";
import bcryptjs from 'bcryptjs';
import { validationResult } from "express-validator";
import jwt from 'jsonwebtoken';

const authCtrl = {};

authCtrl.autenticarUsuario = async (req, res) => {
    // Revisar los errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(404).json({
            errores: errores.array()
        });
    }

    // Extraer email y password
    const {email, password} = req.body;

    try {
        // Revisar  que sea un usario registrado
        let usuario = await Usuario.findOne({ email });
        if(!usuario) {
            return res.status(404).json({
                mensaje: 'El usuario no existe'
            });
        }

        // Revisar su password
        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if(!passCorrecto) {
            return res.status(404).json({
                mensaje: 'Password incorrecto'
            });
        }
        // Si todo es correcto -- Crear y firmar el JWT
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
    }
}

export default authCtrl;