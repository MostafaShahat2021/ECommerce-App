require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
MONGO_URI = process.env.MONGO_URI;
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error))

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
      'Pragma'
    ],
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))