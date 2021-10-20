import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

dotenv.config()
app.use(cors())

app.use((req, res) => {
    console.log(req.originalUrl)
})

app.listen(process.env.PORT, () => {
    console.log(`Listening now at ${process.env.PORT}`)
})