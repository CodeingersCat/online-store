import expressAsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken'
import User from '../models/User.js';

const Private = expressAsyncHandler(async (req, res, next) => {

    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === "Bearer"){
        console.log(req.headers.authorization)
        try{
            const token = req.headers.authorization.split(' ')[1];
            const verified = jwt.verify(token, process.env.SECRET);
            req.user = await User.findById(verified.payload).select('-password') 
            next();
        }catch(error){
            console.log(error);
            res.status(401)
            throw new Error("Unauthorized. Token invalid")
        }
    }else{
        res.status(401)
        throw new Error("Unauthorised. Token missin")
    }
})

export default Private;