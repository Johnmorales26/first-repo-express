// Importando Express
import express from 'express';
//  Importando htpp-status
import httpStatus from 'http-status';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';
import notFound from './routes/notFound.route.js';
import path from 'path';
import { ROOT_DIR } from './helpers/paths.js';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));
//  Se registra el Middleware para servidor de archivos estaticos
app.use(express.static(path.join(ROOT_DIR, 'public')));
// Se agrega ruta de administrador
app.use('/admin', adminRouter);
// Se agrega ruta shop
app.use(shopRouter);
//  Registrando middleware para error 404
app.use(notFound);


// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});