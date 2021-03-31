import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import config from '../../config/config.js'

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    console.log(`MongoDB connected: ${connect.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
