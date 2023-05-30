// Importando el enrutador de express
import { Router } from 'express';
//  Importando el gestor de rutas
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

router.use((req, res) => {
    //res.status(404).sendFile(path.resolve('views', 'not-found.html'));
    res.render('not-found');
});

export default router;