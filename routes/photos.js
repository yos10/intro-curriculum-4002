'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
  const title = req.params.title;
  const images = fs.readdirSync('public/images').map(item => path.parse(item).name);
  if (images.indexOf(title) >= 0) {
    res.render('photos', { title: title });
  } else {
    res.status(404).send('Not Found');
  }
});

module.exports = router;
