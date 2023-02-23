const mongoose = require("mongoose");

const connectMongo = async () => mongoose.connect(process.env.MONGODB_URI);

module.exports = connectMongo;
