const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/dbConnect'); 
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4040;



// Connect to the database
db.connect();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
