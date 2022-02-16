import asyncHandler from 'express-async-handler'
import User from '../models/User.js';
import { tokenGen } from '../utils/token.js'; 
import jwt from 'jsonwebtoken'
import Product from '../models/Product.js';

//Sign up new user in database
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
                token: tokenGen(newUser._id)
            })
        }else{
            res.status(400);
            throw new Error("Couldn't create new user");
        }
    }

})

//Log in users
//ACCESS: PUBLIC
//POST api/user/login
export const signIn = asyncHandler(async(req, res) => {
    const user = await User.findOne({ email: req.body.email }).select('-password')
    if(!user){
        res.status(400);
        throw new Error("User not found");
    }

    if(!user.matchPassword(req.body.password)){
        res.status(401);
        throw new Error("Incorrect password");
    }

    var token = tokenGen(user._id);
    res.cookie("token", token, {expire: new Date()+9999});
    res.status(200);
    res.json({token, user});
})

//Gets user details  from db
//ACCESS: PRIVATE
//GET api/user/get
export const getUser = asyncHandler(async(req, res) => {

    const user = req.user
    if(!user){
        res.status(400);
        throw new Error("Please log in");
    }

    res.status(200);
    res.json({user})

})

//Adds item to cart
//ACCESS: PRIVATE
//PUT api/user/toCart
export const addToCart = asyncHandler(async(req, res) => {
    const cartItem = req.body.pid;
    const user = req.user;
    if(!user || !cartItem){
        res.status(400);
        throw new Error("Please log in");
    }

    const updatedCart = await User.findByIdAndUpdate(user._id, {
        cart : [...user.cart, cartItem]
    }).exec()

    res.status(200);
    res.json({updatedCart})
}) 

//Lists all cart items
//ACCESS: PRIVATE
//GET API/USER/CART
export const getCart = asyncHandler(async(req, res) => {
    if(!req.user){
        res.status(400);
        throw new Error("Please log in");
    }
    const user = req.user;
    const { cart }  = await User.findById(user).select("cart -_id");
    let prods = cart.map(async item => {
        const elem = await Product.findById(item);
        // console.log(elem)
        // prods.push(elem)
        return elem;
    })

    Promise
    .all(prods)
    .then(prods => {
        res.status(200);
        res.json(prods);
    })    
})