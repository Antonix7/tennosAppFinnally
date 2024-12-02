import { Router } from 'express';
import {
    registerProduct,
    consulteAllProducts,
    consulteProduct,
    deleteProduct,
    updateProduct
} from '../controllers/products.controller.js'

const router = Router();

router.post('/registerProduct',registerProduct);
router.get('/consulteAllProducts',consulteAllProducts);
router.get('/consulteProduct:/id',consulteProduct);
router.delete('/deleteProduct:/id',deleteProduct);
router.put('/updateProduct/:id',updateProduct);

export default router;