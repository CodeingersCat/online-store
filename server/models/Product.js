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




// id: "1",
//     name: "Duracell - CopperTop AA Alkaline Batteries - Long Lasting, All-Purpose Double A Battery for Household and Business - 28 Count",
//     image: "    img/duracell.jpg",
//     description:
//       "Duracell AA batteries: The Duracell CopperTop double a alkaline battery is designed for use in household items like remotes, toys, and more. Duracell CopperTop batteries are available in double a (AA), triple a (AAA), C, D and 9V sizes",
//     brand: "Duracell",
//     category: "Batteries",
//     price: 100,
//     stock: 0,
//     ratings: 4.2,
//     numReviews: 30,