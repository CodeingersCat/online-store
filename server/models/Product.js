import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    
    name:{
        type: String,
        required: true
    },
    
    image:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    brand:{
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    ratings: {
        type: Number,
        required: true
    },

    numReviews: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);
export default Product;
