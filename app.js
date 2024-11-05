const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const { getUserInfo } = require('./Controllers/userController');

// Read Mongo URI from environment variables
const mongoURI = process.env.MONGO_URI || 'mongodb://root:example@localhost:27017/mern-app?authSource=admin';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

app.get('/', getUserInfo);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
