import expressAsyncHandler from 'express-async-handler'
import Razorpay from 'razorpay'
import dotenv from 'dotenv'
import Order from '../models/Order.js'
dotenv.config()

const rzpInstance = new Razorpay({
    key_id : process.env.RAZOR_ID,
    key_secret : process.env.RAZOR_KEY 
})

export const newOrder = expressAsyncHandler(async (req, res) => {
    if(!req.user){
        res.status(400);
        throw new Error("Please log in");
    }
    
    const {amount, currency, items} = req.body;
    rzpInstance.orders.create({amount, currency}, async (err, order)=>{ 
        if(!err){
            try{
                const rzp = order
                const p = await Order.create({razor_res: {...rzp}, items})
                res.json(p)
                
            }catch(error){
                console.log(error);
                res.json(error)
            }            
        }
        else res.send(err);
    })
})