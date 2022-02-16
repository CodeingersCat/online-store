import asyncHandler from "express-async-handler";
import Product from "../models/Product.js"

//Gets product details  from db
//ACCESS: PUBLIC
//GET api/product/get
export const getProduct = asyncHandler(async(req, res) => {
    console.log(req.params)
    const prod = await Product.findOne({ _id: req.params.id })

    if(!prod){
        res.status(400);
        throw new Error("Product not found");
    }

    res.status(200);
    res.json(prod);
})

//GET all products from db
//ACCESS: PUBLIC
//GET api/product/all
export const allProduct = asyncHandler(async(req, res) => {
    const prod = await Product.find();

    if(!prod){
        res.status(400);
        throw new Error("Product not found");
    }

    res.status(200);
    res.json(JSON.parse(JSON.stringify(prod)));
})
