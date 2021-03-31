import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

export const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const { id } = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(id).select('-password')
      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not Authorized, token faild')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not Authorized, no token')
  }
})

export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}
