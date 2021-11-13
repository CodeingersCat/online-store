import express from 'express'
import { signUp } from '../controllers/User.js';

const userRoutes = express.Router()

userRoutes.post('/login', (req, res, next) => {
    console.log("Received\n"+JSON.stringify(req.body));
    res.json({"status": "OK"});
    next();
});

userRoutes.post('/signup', signUp);


export default userRoutes;