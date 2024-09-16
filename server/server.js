require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes');

const app = express();

// connect to MongoDB
const connectDB = async (connectionString) => {
  try {
    await mongoose
      .connect(connectionString)
      .then(() => console.log('MongoDB Connected'))
      .then(
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
      );
  } catch (error) {
    console.log(error);
  }
};
connectDB(MONGO_URI);

// middlewares
app.use(
  cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
      'Content-type',
      'Authorization',
      'Cash-Control',
      'Expires',
      'Pragma',
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);