'use strict';

const express = require('express');
const router = express.Router();
const response = require('../services/response');
const delay = require('../services/delay');
const dummyAuth = require('../services/auth');

/* test route as a simple GET request */
router.get('/query', (req, res, next) => {
  const message = response.build(req.query);

  /* send the request query object back as a JSON in response */
  delay(() => res.json(message));
});

/* test route as a simple POST request */
router.post('/post', (req, res, next) => {
  /* build a response message with the posted data */
  const message = response.build(req.body);
  /* explicitly set the response header as a JSON response */
  res.setHeader('Content-Type', 'application/json');
  /* force the message to be parsed as a JSON string before sending back */
  delay(() => res.send(message.asJSON));
});

/* test route as a simple POST request */
router.post('/auth', (req, res, next) => {
  if (dummyAuth(req.body.password) === true) {
    const message = 'Congrats! Correct password!!';

    delay(() => res.json(response.build(message)));
  } else {
    delay(() => res.json(response.error()));
  }
});

/* test route as a simple GET request */
router.get('/error', (req, res, next) => {
  const message = response.error();

  delay(() => res.json(message));
});

/* test route to get a rendered view */
router.get('/view/:name', (req, res, next) => {
  const view = req.params.name;
  const content = `You are getting into the ${view} view.`;

  delay(() =>
    res.render('info', {
      title: view,
      message: content
    })
  );
});

module.exports = router;
