import { Router} from "express";
import noticiaCtrl from "../controllers/noticias.controllers";

const router = Router();

router.route('/').get(noticiaCtrl.getPrueba).post(noticiaCtrl.crearNoticia);

export default router; 