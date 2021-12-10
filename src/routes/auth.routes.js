import { Router} from "express";
import authCtrl from "../controllers/auth.controllers";
import { check } from "express-validator";
import autorize from '../auth/autorize';
const router = Router();

router.route('/').post(
    [
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min:6})
    ],
    authCtrl.autenticarUsuario)
    .get(autorize, authCtrl.cerrarSesion);

export default router; 
