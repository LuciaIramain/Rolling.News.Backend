import { Router} from "express";
import usuariosCtrl from "../controllers/usuarios.controllers";
import { check } from "express-validator";

const router = Router();

router.route('/').post(
    [
        check('nombre', 'El nombre es obligatorio').isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min:6})
    ],
    usuariosCtrl.crearUsuario);

export default router; 
