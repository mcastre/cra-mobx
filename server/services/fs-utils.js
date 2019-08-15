'use strict';

const fs = require('fs');
const path = require('path');

/* a util middleware which picks up JSON file content per request url pattern */
const readJSON = (req, res, next) => {
  const segments = path.parse(req.path);
  const filePath = path.join(__dirname, '..', 'constants', segments.dir, segments.name);

  try {
    const raw = fs.readFileSync(`${filePath}.json`, 'utf8');

    req.localData = JSON.parse(raw);
  } catch (st) {
    req.localData = {
      errors: [
        {
          errorText: 'The JSON file can not be found or is invalid.'
        }
      ],
      st
    };
  }

  next();
};

/* a util middleware which stores the posted data to temp folder */
const writeJSON = (req, res, next) => {
  /* only record posted data if not empty */
  if ('POST' === req.method && req.body !== undefined) {
    const segments = path.parse(req.path);
    const filePath = path.join(__dirname, '..', 'temp', segments.name);
    const writer = fs.createWriteStream(`${filePath}.json`, 'utf8');

    /* write the content to the file when it's open */
    writer.once('open', descriptor => {
      writer.write(JSON.stringify(req.body));
      writer.end();
    });
  }

  next();
};

module.exports = {
  readJSON,
  writeJSON
};
