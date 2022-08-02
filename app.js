require('dotenv').config()
require("express-async-errors")

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')


const notFoundMiddleware = require('./middleware/not-found')
const errorHandler =  require('./middleware/error-handler')

// middleware
app.use(express.json())

// routes
app.get('/', (req,res) => {
    res.send('Store API <a href="/api/v1/products">Products Route</a>')
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorHandler)
const port = process.env.PORT || 3000
const start = async () => {
    try {
        // connect to DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()