require('dotenv').config();
const express = require('express');
const app = express();

app.get ('/', (req,res) => {
    res.send ('Hello Rest-Rant World!');
});

app.use('/places', require('./controllers/places'));

app.get('*', (req, res) => {
    console.log('User requested unknown')
    res.send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });

  const router = require('express').Router()

// More code here in a moment

module.exports = router




