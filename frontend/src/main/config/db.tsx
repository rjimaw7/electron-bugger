import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://electron1234:electron1234@cluster0.dvjbd.mongodb.net/?retryWrites=true&w=majority'
    )

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
