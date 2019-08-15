/**
 * A simple route for mocking up any /api/* calls with static files
 */

'use strict';

const express = require('express');
const router = express.Router();
const response = require('../services/response');
const delay = require('../services/delay');

const { readJSON, writeJSON } = require('../services/fs-utils');

/* use the middleware to pick up mockup data from constant folder */
router.use(readJSON);

/* use the middleware to store posted data to the temp folder*/
router.use(writeJSON);

/* mock delay */
router.use(delay);

/**
 * GET handler
 * mock up response by reading arbitrary constant files
 */
router.get('*', (req, res, next) => {
  res.json(req.localData);
});

/**
 * POST handler
 * simply restore the posted data in a temporary folder
 */
router.post('*', (req, res, next) => {
  res.json(req.localData);
});

module.exports = router;
