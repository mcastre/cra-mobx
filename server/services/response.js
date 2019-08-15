/**
 * A response generator
 */
'use strict';

const JSONTemplate = {
  timestamp: '',
  message: ''
};

class Response {
  constructor(message) {
    this.timestamp = Date.now();
    this.message = message;
  }

  get asJSON() {
    try {
      console.log({ ...JSONTemplate, ...this });
      return JSON.stringify(this);
    } catch (err) {
      throw new Error(err);
    }
  }

  get asHTML() {
    try {
      return `<div>${message}</div>`;
    } catch (err) {
      throw new Error(err);
    }
  }

  get asMixed() {
    try {
      return JSON.stringify({
        htmlStr: this.message,
        data: this
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = {
  build: message => new Response(message),
  error: () => new Response({ error: true })
};
