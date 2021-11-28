import { Router} from "express";
import noticiaCtrl from "../controllers/noticias.controllers";

const router = Router();

router.route('/')
    .get(noticiaCtrl.listarNoticias)
    .post(noticiaCtrl.crearNoticia);
    
router.route('/:id')
    .delete(noticiaCtrl.eliminarNoticia)
    .get(noticiaCtrl.obtenerNoticia)
    .put(noticiaCtrl.editarNoticia);
        

export default router; 