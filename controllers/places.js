const express = require('express');
const router = express.Router();
const render = require('../render');
const places = require('../models/places.js');

router.get('/', (req, res) => {
    res.send(render('places/Index', { places: places }));
});

router.get('/new', (req, res) => {
    res.send(render('places/New'));
});

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

module.exports = router;
        
    
    
