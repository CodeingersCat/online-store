import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String,
    },

    password: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Number,
        required: true,
        default: 0
    }
},
    { timestamps: true }
);

userSchema.method('matchPassword', async function(password){
    return await bcrypt.compare(password, this.password);
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }else{
        const salt = await bcrypt.genSalt(10);
        this.password =  await bcrypt.hash(this.password, salt);
    }
})

const User = mongoose.model('User', userSchema);
export default User;