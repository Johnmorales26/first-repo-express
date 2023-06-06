// Importando el enrutador de express
import { Router } from 'express';
// Importando funciones del controlador
import { getError404 } from '../controllers/httpError.controller.js'
//  Importando el gestor de rutas
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

router.use(getError404);

export default router;