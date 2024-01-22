const express = require('express');
const db = require('./config/dbConnect'); 
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4040;

const app = express();

// Connect to the database
db.connect();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
