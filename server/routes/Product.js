import express from 'express';
import { allProduct, getProduct } from '../controllers/Product.js';

const productRoutes = express.Router();

productRoutes.use('/get/:id', getProduct);
productRoutes.use('/all', allProduct);

export default productRoutes;