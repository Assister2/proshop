'use strict'
console.clear()

import express from 'express'
import bodyParser from 'body-parser'
import productRoutes from './routes/productRoutes.js'

import connectDB from './lib/connectDB.js'
connectDB()

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('API is working')
})

app.use('/api/products', productRoutes)

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port 5000`)
})
