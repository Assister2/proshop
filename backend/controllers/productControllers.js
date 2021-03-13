import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

/*============================================================================
@desc   Fetch all products
@route  GET /api/products
@access Public
=============================================================================*/
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  if (products) return res.status(200).json(products)
  else return res.status(404).json({ error: 'No products found' })
})

/*============================================================================
@desc   Fetch a single product
@route  GET /api/products/:id
@access Public
=============================================================================*/
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) return res.status(200).json(product)
  else return res.status(404).json({ error: 'Product not found' })
})

export default { getProducts, getProductById }
