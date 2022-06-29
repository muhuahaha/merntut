require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.path, req.method);
  console.log('req');
  next();
});

// routes

app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
