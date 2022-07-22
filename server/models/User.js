import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    firstname: {
        type: String,
        required: false
    },
    
    lastname: {
        type: String,
        required: false
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },

    addresses: {
        type: Array,
        default: [],
        required: false
    },

    password: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Number,
        required: true,
        default: 0
    },

    cart: [
        {
            name : {
                type: String,
                required: true
            },  
            prodid: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Product'
            },
            qty: {
                type: Number,
                default: 1,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            subtotal: {
                type: Number,
                required: true,
            },
            image: {
                type: String
            }
        }
    ],

    // cartTotal: {
    //     type: Number,
    //     default: 0,
    //     required: true
    // },

    orders: {
        type: Array,
        default: [],
        required: false
    }
},
    { timestamps: true }
);

userSchema.method('matchPassword', async function(password){
    return await bcrypt.compare(password, this.password);
})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(10);
        this.password =  await bcrypt.hash(this.password, salt);
    }else next();
})

// userSchema.pre('updateOne', function(){
//     console.log(this)
//     this.cart.subtotal = this.cart.qty*this.cart.price;
// })

const User = mongoose.model('User', userSchema);
export default User;