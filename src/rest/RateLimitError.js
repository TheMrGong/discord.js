'use strict';

/**
 * Represents a HTTP error from a request.
 * @extends Error
 */
class RateLimitError extends Error {
  constructor(timeout) {
    super(`Ratelimited for ${timeout}ms`);

    /**
     * Time before the next request can be sent
     * @type {number}
     */
    this.timeout = timeout;
  }
}

module.exports = RateLimitError;
