'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('actions.js', {
    title: 'ROCO Express mock server',
    clientAppURL: `http://${req.hostname}:${process.env.PORT - 1}`
  });
});

module.exports = router;
