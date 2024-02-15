require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/rest-rant';

console.log("MONGO_URI:", process.env.MONGO_URI);

console.log("MONGO_URI:", MONGO_URI);

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports.Place = require('./places');

