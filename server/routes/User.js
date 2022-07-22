import express from 'express'
import { addToCart, deleteCartItem, getCart, getUser, signIn, signUp } from '../controllers/User.js';
import Private from '../middleware/authHandler.js';

const userRoutes = express.Router()

userRoutes.post('/login', signIn);
userRoutes.post('/signup', signUp);
userRoutes.get('/get', Private, getUser);
userRoutes.get('/cart', Private, getCart);
userRoutes.put('/toCart', Private, addToCart);
userRoutes.delete("/deleteCartItem", Private, deleteCartItem);

userRoutes.get('/trial', (req, res) => {
    res.status(201);
    res.json({msg: "HIT"});
});

export default userRoutes;