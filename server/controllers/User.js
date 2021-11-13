import asyncHandler from 'express-async-handler'
import User from '../models/User.js';

export const authUser = () => {
    
}

//Sign in new user in database
//ACCESS: PUBLIC
//POST api/user/signup
export const signUp = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password)
    const checkDuplicate = await User.findOne({ email });

    if(checkDuplicate){
        console.log(checkDuplicate)
        res.status(400);
        throw new Error("Email already registered");
    }else{
        const newUser = await User.create({name, email, password});
        if(newUser){
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                password: newUser.password 
            })
        }else{
            res.status(400);
            throw new Error("Couldn't create new user");
        }
    }

})