const mongoose = require("mongoose")
require("dotenv").config()

// MongoDb Atlas
const connection = mongoose.connect(process.env.mongoURL)


module.exports = {
    connection
}
