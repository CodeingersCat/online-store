import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './config/db.js'
import userRoutes from './routes/User.js'
import { errorHandler } from './middleware/errorHandlers.js'
import cookieParser from 'cookie-parser'
import productRoutes from './routes/Product.js'


const app = express()

console.log(dotenv.config())
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
    console.log("Hit at "+req.originalUrl);
    next();
})

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

app.use(errorHandler);

dbConnect();

app.listen(process.env.PORT, () => {
    console.log(`Up and running@PORT${process.env.PORT}`)
})