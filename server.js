const express = require('express')
require('dotenv').config()
const {connectDB} = require('./config/db')
const app = express()





app.get('/', (req, res)=>{
    res.send("Things are working")
})

app.listen(8080, async ()=>{
    try {
        await connectDB()
        console.log("Server is runnig on port 8080")
    } catch (error) {
        console.error(error.message)
    }
})