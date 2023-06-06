// Importando el enrutador de express
import { Router } from 'express';
// Importando funciones del controlador
import { getAddProduct, postAddProduct } from '../controllers/products.controller.js'
// Creando una instancia del enrutador de express
const router = Router();
// Creando datos en la memorian volatil
export const products = [];

// GET /admin/add-product
router.get('/add-product', getAddProduct);

// POST /admin/add-product
router.post('/add-product', postAddProduct);

// Exportando el enrutador admin
export default router;