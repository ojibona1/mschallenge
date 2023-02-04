const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://projay:Thinkover@projay.wgjikru.mongodb.net/mschallenge?retryWrites=true&w=majority')
        console.log(`${conn.connection.host}`.underline.cyan)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connectDb,
}