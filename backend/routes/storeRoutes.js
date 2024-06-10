import express from 'express';
import { getProducts, getSingleProduct, getSpecificProducts, initialzeProducts, postProducts } from '../controller/storeController.js';


const router = express.Router();

router.get('/products', initialzeProducts);
router.get('/items', getProducts);
router.post('/items', postProducts);
router.get('/items/:id', getSingleProduct);
router.get('/trendy', getSpecificProducts)


export default router;