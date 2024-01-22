const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  secretKey: process.env.SECRET_KEY || "6708c585cf1cba1b321bee61bff4f604e1b586c1846e4a338ff054d16dd8bede",
  databaseUrl: process.env.MONGODB_URI || "mongodb+srv://ayo:admin@cluster0.7b65tbh.mongodb.net"
};
