const mongooose = require('mongoose')

const connectDB = async()=>{
    try {
        await mongooose.connect(process.env.MONGO_URI)
        console.log(`MongoDB is connected`)
    } catch (error) {
        console.error(error.message)
    }
}
module.exports = {connectDB}