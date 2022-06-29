import express from 'express';
import { newOrder } from '../controllers/Order.js';
import Private from '../middleware/authHandler.js';

const orderRoutes = express.Router();

orderRoutes.put("/create", Private, newOrder)

export default orderRoutes