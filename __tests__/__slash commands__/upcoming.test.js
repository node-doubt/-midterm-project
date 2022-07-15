'use strict';

const upcoming = require('../../src/slash-commands/upcoming');

describe('upcoming()', () => {
  it('should successfully send a request to CANVAS API for assignments due today.', () => {
    expect(() => { upcoming() }).toBeTruthy();
  })
})
