const mongoose = require('mongoose');

const connectDB = async () => {
  const URL =
    process.env.MONGO_URI;
  const conn = await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Coneected: ${conn.connection.host}`);
};

module.exports = connectDB;
