const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb+srv://ammeyer880:KvRtUZl5C7oNZ5kF@mern123.6qd5aqn.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;