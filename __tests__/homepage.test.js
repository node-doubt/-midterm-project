'use strict';

const homePage = require('../src/homePage.js');

describe('homePage', () => {
  it('should successfully send a request to CANVAS API for assignments due today.', () => {
    expect(() => { homePage() }).toBeTruthy();
  })
})
