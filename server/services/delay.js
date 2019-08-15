/**
 * A utility module provide the delayed-invocation of a function per global time latency
 * @module delay
 * @type {Function}
 * @param {function} fn A function which will be executed with delay
 * @param {number} wait The time latency of execution; default value is 0 (immediate)
 *                      and can be configured by environment variable RESPONSE_DELAY
 */
'use strict';

module.exports = (req, res, next) => {
  setTimeout(() => {
    next();
  }, process.env.RESPONSE_DELAY || 0);
};
