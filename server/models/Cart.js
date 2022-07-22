import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },

    items: [
        {
            id: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Product'
            },
            qty: {
                type: Number,
                default: 1,
                required: true
            },
            subtotal: {
                type: Number,
                required: true
            }
        }
    ],

    total: {
        type: Number
    }    
}, {timestamps: true}
);

//Calculates the total billable amount for the cart
cartSchema.method('cartTotal', function(){
    const total = this.items.reduce((total, item) => total+item.subtotal); 
    return total;
})

const Cart = mongoose.model('CartItem', cartSchema);
export default Cart;