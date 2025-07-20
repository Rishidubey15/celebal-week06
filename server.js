const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); 

mongoose.connect("mongodb://localhost:27017/celebal", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(3000, () => {
    console.log(`Server running on port 3000`);
  });
}).catch(err => console.error(err));
