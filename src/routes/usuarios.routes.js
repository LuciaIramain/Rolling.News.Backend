import { Router} from "express";
import usuariosCtrl from "../controllers/usuarios.controllers";

const router = Router();

router.route('/').post(usuariosCtrl.crearUsuario);

export default router; 
